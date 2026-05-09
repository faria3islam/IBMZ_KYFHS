import { alerts } from '../data/alerts';
import { floodZones } from '../data/floodZones';
import { municipalities } from '../data/municipalities';
import { reports } from '../data/reports';

const ALERT_WEIGHTS = {
	boil_water_advisory: 50,
	flood_warning: 20,
	sewage_overflow_risk: 15
};

// Known country aliases so users can search "canada", "UK", "usa" etc.
const COUNTRY_ALIASES = {
        canada: 'Canada',
        ca: 'Canada',
        'united states': 'United States',
        usa: 'United States',
        us: 'United States',
        america: 'United States',
        'united kingdom': 'United Kingdom',
        uk: 'United Kingdom',
        britain: 'United Kingdom',
        england: 'United Kingdom',
        australia: 'Australia',
        au: 'Australia',
        india: 'India',
        bharat: 'India',
        in: 'India'
};

function normalize(value) {
        return String(value || '').trim().toLowerCase();
}

function resolveCountry(query) {
        return COUNTRY_ALIASES[normalize(query)] || null;
}

function matchesLocation(candidateLocation, targetLocation, municipality) {
        const candidate = normalize(candidateLocation);
        const target = normalize(targetLocation);

        if (!candidate || !target) {
                return false;
        }

        if (candidate === target) {
                return true;
        }

        if (candidate.includes(target) || target.includes(candidate)) {
                return true;
        }

        if (municipality) {
                const municipalityName = normalize(municipality.name);
                if (candidate === municipalityName || candidate.includes(municipalityName) || municipalityName.includes(candidate)) {
                        return true;
                }

                return municipality.adjacentCommunities.some(function (adjacent) {
                        const adjacentName = normalize(adjacent);
                        return candidate === adjacentName || candidate.includes(adjacentName) || adjacentName.includes(candidate);
                });
        }

        return false;
}

function clamp(value, min, max) {
	return Math.max(min, Math.min(max, value));
}

function getRiskLevel(score) {
	if (score <= 30) {
		return 'Safe';
	}

	if (score <= 65) {
		return 'Caution';
	}

	return 'Unsafe';
}

function buildExplanation(location, riskLevel, activeAlerts, matchingReports, floodZone) {
	const alertSummary = activeAlerts.length
		? activeAlerts.map(function (item) {
				return item.title.toLowerCase();
			}).join(' ')
		: 'no active official alerts were found';

	const reportSummary = matchingReports.length
		? matchingReports.length + ' nearby community report' + (matchingReports.length > 1 ? 's' : '')
		: 'no nearby community reports were submitted';

	const floodSummary = floodZone ? 'The location also sits inside the ' + floodZone.zoneName + '.' : '';

	return 'AquaGuard AI marks ' + location + ' as ' + riskLevel + ' because ' + alertSummary + '. Community signals show ' + reportSummary + '. ' + floodSummary;
}

export function calculateWaterRisk(location) {
	const municipality = municipalities.find(function (item) {
		return matchesLocation(item.name, location) || matchesLocation(location, item.name);
	}) || null;

	const activeAlerts = alerts.filter(function (alert) {
		if (!alert.active) {
			return false;
		}

		return matchesLocation(alert.location, location, municipality);
	});

	const matchingReports = reports.filter(function (report) {
		return matchesLocation(report.location, location, municipality);
	});

	const floodZone = floodZones.find(function (zone) {
		return matchesLocation(zone.location, location, municipality) && zone.active;
	}) || null;

	const uniqueAlertTypes = new Set(activeAlerts.map(function (alert) {
		return alert.type;
	}));

	let score = 0;
	const contributingFactors = [];

	uniqueAlertTypes.forEach(function (type) {
		const weight = ALERT_WEIGHTS[type] || 0;
		if (weight > 0) {
			score += weight;
			contributingFactors.push({
				label: type.replace(/_/g, ' '),
				score: weight,
				detail: 'Official signal detected for ' + location + '.'
			});
		}
	});

	if (matchingReports.length === 1) {
		score += 5;
		contributingFactors.push({
			label: 'Single community report',
			score: 5,
			detail: 'One report matches the area.'
		});
	} else if (matchingReports.length > 1) {
		score += 10;
		contributingFactors.push({
			label: 'Multiple community reports',
			score: 10,
			detail: matchingReports.length + ' reports mention water quality issues nearby.'
		});
	}

	if (floodZone) {
		score += 5;
		contributingFactors.push({
			label: 'Flood-prone zone',
			score: 5,
			detail: floodZone.note
		});
	}

	if (municipality) {
		contributingFactors.push({
			label: 'Municipal infrastructure relationship',
			score: 0,
			detail: municipality.waterSource + ' and shared systems are relevant to the risk review.'
		});
	}

	score = clamp(score, 0, 100);

	const qualitySignals = activeAlerts.length * 18 + (matchingReports.length > 0 ? 8 : 0) + (floodZone ? 10 : 0) + (municipality ? 6 : 0);
	const confidence = clamp(Math.round(45 + qualitySignals), 40, 98);
	const riskLevel = getRiskLevel(score);

	return {
		location,
		riskScore: score,
		riskLevel,
		confidence,
		contributingFactors,
		activeAlerts,
		matchingReports,
		municipality,
		floodZone,
		status: riskLevel,
		explanation: buildExplanation(location, riskLevel, activeAlerts, matchingReports, floodZone)
	};
}

export default calculateWaterRisk;

// ─── Country-level aggregation ───────────────────────────────────────────────

export function isCountryQuery(query) {
        return resolveCountry(query) !== null;
}

/**
 * Returns an array of per-city risk results for every municipality in a country,
 * plus a summary object with aggregate stats.
 */
export function calculateCountryRisk(query) {
        const country = resolveCountry(query);
        if (!country) return null;

        const cityMunicipalities = municipalities.filter(function (m) {
                return m.country === country;
        });

        const cityResults = cityMunicipalities.map(function (m) {
                return calculateWaterRisk(m.name);
        });

        // Aggregate counts
        const counts = { Safe: 0, Caution: 0, Unsafe: 0 };
        let totalAlerts = 0;
        let totalReports = 0;
        let worstScore = 0;
        let worstCity = null;

        cityResults.forEach(function (r) {
                counts[r.riskLevel] = (counts[r.riskLevel] || 0) + 1;
                totalAlerts += r.activeAlerts.length;
                totalReports += r.matchingReports.length;
                if (r.riskScore > worstScore) {
                        worstScore = r.riskScore;
                        worstCity = r;
                }
        });

        // Country-level risk level is driven by worst city
        const overallLevel = getRiskLevel(worstScore);
        const avgConfidence = cityResults.length
                ? Math.round(cityResults.reduce(function (sum, r) { return sum + r.confidence; }, 0) / cityResults.length)
                : 45;

        return {
                isCountry: true,
                country,
                overallLevel,
                overallScore: worstScore,
                confidence: avgConfidence,
                counts,
                totalAlerts,
                totalReports,
                worstCity,
                cityResults
        };
}

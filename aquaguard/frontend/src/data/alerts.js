// Alerts keyed by location — add country-wide patterns here for rollup queries
export const alerts = [
	{
		id: 1,
		location: 'Windsor, ON',
		type: 'boil_water_advisory',
		title: 'Boil water advisory active near waterfront distribution lines',
		source: 'City of Windsor',
		severity: 'high',
		active: true,
		updatedAt: '2026-05-09T08:15:00Z'
	},
	{
		id: 2,
		location: 'Windsor, ON',
		type: 'flood_warning',
		title: 'Flood warning for low-lying neighborhoods after overnight storms',
		source: 'Environment Canada',
		severity: 'high',
		active: true,
		updatedAt: '2026-05-09T07:10:00Z'
	},
	{
		id: 3,
		location: 'Windsor, ON',
		type: 'sewage_overflow_risk',
		title: 'Combined sewer overflow risk elevated near storm outfalls',
		source: 'Regional Water Services',
		severity: 'medium',
		active: true,
		updatedAt: '2026-05-08T22:45:00Z'
	},
	{
		id: 4,
		location: 'Tecumseh, ON',
		type: 'flood_warning',
		title: 'Stormwater backup watch in southern Tecumseh',
		source: 'County Emergency Office',
		severity: 'medium',
		active: true,
		updatedAt: '2026-05-09T06:20:00Z'
	},
	{
		id: 5,
		location: 'Chatham, ON',
		type: 'boil_water_advisory',
		title: 'Localized boil water advisory after maintenance flush',
		source: 'Chatham-Kent Water',
		severity: 'medium',
		active: true,
		updatedAt: '2026-05-08T19:30:00Z'
	},
	{
		id: 6,
		location: 'Toronto, ON',
		type: 'sewage_overflow_risk',
		title: 'Combined sewer overflow risk after heavy rainfall in older downtown areas',
		source: 'Toronto Water',
		severity: 'medium',
		active: true,
		updatedAt: '2026-05-09T06:00:00Z'
	},
	{
		id: 7,
		location: 'Ottawa, ON',
		type: 'flood_warning',
		title: 'Ottawa River spring runoff watch — elevated turbidity near intakes',
		source: 'Ottawa River Regulation Planning Board',
		severity: 'medium',
		active: true,
		updatedAt: '2026-05-08T20:00:00Z'
	},
	{
		id: 8,
		location: 'Calgary, AB',
		type: 'flood_warning',
		title: 'Bow River flow rate elevated — flood watch issued for low-lying areas',
		source: 'Alberta Environment and Protected Areas',
		severity: 'high',
		active: true,
		updatedAt: '2026-05-09T05:30:00Z'
	},
	{
		id: 9,
		location: 'Montreal, QC',
		type: 'sewage_overflow_risk',
		title: 'Overflow risk from combined sewers during spring melt — St. Lawrence watch',
		source: 'Ville de Montréal',
		severity: 'medium',
		active: true,
		updatedAt: '2026-05-09T04:45:00Z'
	},
	{
		id: 10,
		location: 'Detroit, MI',
		type: 'boil_water_advisory',
		title: 'Precautionary boil water advisory after pressure loss in eastside mains',
		source: 'Detroit Water and Sewerage Department',
		severity: 'high',
		active: true,
		updatedAt: '2026-05-09T07:50:00Z'
	},
	{
		id: 11,
		location: 'Los Angeles, CA',
		type: 'boil_water_advisory',
		title: 'LADWP precautionary advisory in San Fernando Valley groundwater zone',
		source: 'LA Department of Water and Power',
		severity: 'medium',
		active: true,
		updatedAt: '2026-05-08T18:00:00Z'
	},
	{
		id: 12,
		location: 'London, UK',
		type: 'sewage_overflow_risk',
		title: 'Combined sewer overflows into Thames reported at multiple tidal points',
		source: 'Thames Water',
		severity: 'medium',
		active: true,
		updatedAt: '2026-05-08T21:30:00Z'
	},
	{
		id: 13,
		location: 'Sydney, AU',
		type: 'flood_warning',
		title: 'Warragamba Dam spillway active — downstream Nepean River flood warning',
		source: 'NSW State Emergency Service',
		severity: 'high',
		active: true,
		updatedAt: '2026-05-09T03:15:00Z'
	},
	// India
	{
		id: 14,
		location: 'Mumbai, MH',
		type: 'flood_warning',
		title: 'IMD red alert — extremely heavy rainfall forecast; Mithi River flooding risk',
		source: 'India Meteorological Department',
		severity: 'high',
		active: true,
		updatedAt: '2026-05-09T05:00:00Z'
	},
	{
		id: 15,
		location: 'Mumbai, MH',
		type: 'sewage_overflow_risk',
		title: 'Stormwater drainage overwhelmed in M-Ward and Kurla — sewage overflow into streets',
		source: 'MCGM Disaster Management Cell',
		severity: 'high',
		active: true,
		updatedAt: '2026-05-09T04:30:00Z'
	},
	{
		id: 16,
		location: 'Delhi, DL',
		type: 'boil_water_advisory',
		title: 'Ammonia spike on Yamuna causes supply disruption — boil water advisory across north Delhi',
		source: 'Delhi Jal Board',
		severity: 'high',
		active: true,
		updatedAt: '2026-05-09T06:00:00Z'
	},
	{
		id: 17,
		location: 'Delhi, DL',
		type: 'flood_warning',
		title: 'Yamuna River flood alert — water level nearing danger mark at Old Railway Bridge',
		source: 'Central Water Commission India',
		severity: 'high',
		active: true,
		updatedAt: '2026-05-09T05:45:00Z'
	},
	{
		id: 18,
		location: 'Chennai, TN',
		type: 'boil_water_advisory',
		title: 'Precautionary boil water notice during Chembarambakkam reservoir low-level operation',
		source: 'Chennai Metropolitan Water Supply and Sewerage Board',
		severity: 'medium',
		active: true,
		updatedAt: '2026-05-08T22:00:00Z'
	},
	{
		id: 19,
		location: 'Bengaluru, KA',
		type: 'sewage_overflow_risk',
		title: 'Bellandur Lake froth overflow into storm drains — downstream water quality alert',
		source: 'Karnataka State Pollution Control Board',
		severity: 'medium',
		active: true,
		updatedAt: '2026-05-09T04:00:00Z'
	},
	{
		id: 20,
		location: 'Kolkata, WB',
		type: 'flood_warning',
		title: 'Monsoon flood watch — low-lying areas of Howrah and North Kolkata at risk',
		source: 'West Bengal Flood Forecasting Division',
		severity: 'medium',
		active: true,
		updatedAt: '2026-05-09T03:30:00Z'
	}
];

export default alerts;

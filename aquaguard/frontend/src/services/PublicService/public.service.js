import { getIsoFromCompanyCountry, toAlpha2 } from '../../shared/utils/countryMapping.js';

const companies = [
  { id: 1, name: 'AquaSense Labs', country: { countryName: 'United States', isoCode: 'US' } },
  { id: 2, name: 'HydroGreen Solutions', country: { countryName: 'Canada', isoCode: 'CA' } },
  { id: 3, name: 'BlueWave Analytics', country: 'United Kingdom' },
  { id: 4, name: 'RiverNet', country: { countryName: 'Australia', isoCode: 'AU' } },
  { id: 5, name: 'PureWater Insight', country: { countryName: 'Germany', isoCode: 'DE' } },
  { id: 6, name: 'AquaMetrics', country: 'France' },
  { id: 7, name: 'Oceanic Systems', country: { countryName: 'Brazil', isoCode: 'BR' } },
  { id: 8, name: 'HydroPulse', country: 'Japan' },
];

const countries = [
  { id: 840, countryName: 'United States', isoCode: 'US' },
  { id: 124, countryName: 'Canada', isoCode: 'CA' },
  { id: 826, countryName: 'United Kingdom', isoCode: 'GB' },
  { id: 36, countryName: 'Australia', isoCode: 'AU' },
  { id: 276, countryName: 'Germany', isoCode: 'DE' },
  { id: 250, countryName: 'France', isoCode: 'FR' },
  { id: 76, countryName: 'Brazil', isoCode: 'BR' },
  { id: 392, countryName: 'Japan', isoCode: 'JP' },
];

function delay(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), 300));
}

export default {
  async getOverviewStats() {
    const countriesSeen = new Set();
    for (const company of companies) {
      const rawIso = getIsoFromCompanyCountry(company.country);
      const alpha2 = toAlpha2(rawIso);
      if (alpha2) {
        countriesSeen.add(alpha2);
      }
    }

    return delay({
      totalCompanies: companies.length,
      uniqueCountries: countriesSeen.size,
    });
  },

  async getCompanies() {
    return delay(companies);
  },

  async getCountries() {
    return delay(countries);
  },
};

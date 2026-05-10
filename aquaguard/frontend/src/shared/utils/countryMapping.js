export const numericIsoToAlpha2 = {
  '004': 'AF',
  '008': 'AL',
  '012': 'DZ',
  '024': 'AO',
  '032': 'AR',
  '036': 'AU',
  '040': 'AT',
  '056': 'BE',
  '068': 'BT',
  '076': 'BR',
  '084': 'BZ',
  '124': 'CA',
  '156': 'CN',
  '170': 'CO',
  '176': 'PE',
  '208': 'DK',
  '212': 'DM',
  '233': 'EE',
  '246': 'FI',
  '250': 'FR',
  '276': 'DE',
  '300': 'GR',
  '328': 'GL',
  '344': 'HK',
  '356': 'IN',
  '360': 'ID',
  '372': 'IE',
  '380': 'IT',
  '392': 'JP',
  '410': 'KR',
  '414': 'KW',
  '418': 'LA',
  '428': 'LV',
  '440': 'JP',
  '458': 'MM',
  '470': 'BD',
  '484': 'MX',
  '528': 'NL',
  '554': 'NZ',
  '566': 'NG',
  '578': 'NO',
  '604': 'PE',
  '608': 'PH',
  '620': 'PL',
  '642': 'RO',
  '643': 'RU',
  '692': 'BN',
  '699': 'BT',
  '703': 'SG',
  '724': 'ES',
  '752': 'SE',
  '756': 'CH',
  '764': 'TH',
  '826': 'GB',
  '840': 'US',
  '858': 'UY',
  '862': 'VE',
};

export const iso3ToIso2 = {
  USA: 'US',
  CAN: 'CA',
  GBR: 'GB',
  FRA: 'FR',
  DEU: 'DE',
  AUS: 'AU',
  CHN: 'CN',
  JPN: 'JP',
  IND: 'IN',
  BRA: 'BR',
  CHE: 'CH',
  ESP: 'ES',
  ITA: 'IT',
  NLD: 'NL',
  SWE: 'SE',
  MEX: 'MX',
  PER: 'PE',
  RUS: 'RU',
  KOR: 'KR',
  NZL: 'NZ',
  SGP: 'SG',
};

const countryNameToIso3 = {
  'United States': 'USA',
  Canada: 'CAN',
  Australia: 'AUS',
  'United Kingdom': 'GBR',
  Germany: 'DEU',
  France: 'FRA',
  China: 'CHN',
  Japan: 'JPN',
  India: 'IND',
  Brazil: 'BRA',
  Mexico: 'MEX',
  Spain: 'ESP',
  Italy: 'ITA',
  Netherlands: 'NLD',
  Sweden: 'SWE',
  Singapore: 'SGP',
  Norway: 'NOR',
  Philippines: 'PHL',
  Denmark: 'DNK',
  Peru: 'PER',
  Colombia: 'COL',
  Argentina: 'ARG',
  Bangladesh: 'BGD',
  Indonesia: 'IDN',
  Switzerland: 'CHE',
};

export function getCountryISO(country) {
  if (!country || typeof country !== 'string') {
    return null;
  }

  const normalized = country.trim();
  const direct = countryNameToIso3[normalized];
  if (direct) {
    return direct;
  }
  const lower = normalized.toLowerCase();
  const byLower = Object.entries(countryNameToIso3).find(function ([name]) {
    return name.toLowerCase() === lower;
  });
  return byLower ? byLower[1] : null;
}

export function iso3ToIso2Mapper(alpha3) {
  if (!alpha3 || typeof alpha3 !== 'string') {
    return null;
  }

  return iso3ToIso2[alpha3.toUpperCase()] || null;
}

export function toAlpha2(value) {
  if (!value || typeof value !== 'string') {
    return null;
  }

  const normalized = value.trim().toUpperCase();
  if (normalized.length === 2) {
    return normalized;
  }

  if (normalized.length === 3) {
    return iso3ToIso2Mapper(normalized);
  }

  return null;
}

export function getIsoFromCompanyCountry(country) {
  if (!country) {
    return null;
  }

  if (typeof country === 'object' && country.isoCode) {
    return String(country.isoCode);
  }

  if (typeof country === 'string') {
    return getCountryISO(country);
  }

  return null;
}


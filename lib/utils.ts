// helper functions for the application

export function mapSectorToDatabase(formSector: string): string {
  const map: Record<string, string> = {
    'payments': 'Fintech',
    'lending': 'Fintech',
    'neobank': 'Fintech',
    'infrastructure': 'Fintech',
    'wealthtech': 'Fintech',
    'insurtech': 'Fintech',
    'regtech': 'Fintech',
    'other-fintech': 'Fintech',
    'healthtech': 'Healthtech',
    'edtech': 'Edtech',
    'agritech': 'Agritech',
    'logistics': 'Logistics',
    'ecommerce': 'E-commerce',
    'other': 'Other'
  }
  return map[formSector] || 'Other'
}

export function mapTeamSizeToNumber(range: string): number {
  const map: Record<string, number> = {
    '1-5': 3,
    '6-10': 8,
    '11-25': 18,
    '26-50': 38,
    '51-100': 75,
    '100+': 150
  }
  return map[range] || 5
}

export function mapFundingStatusToRoundType(status: string): string {
  const map: Record<string, string> = {
    'bootstrapped': 'bootstrapped',
    'friends-family': 'pre_seed',
    'pre-seed': 'pre_seed',
    'seed': 'seed',
    'series-a': 'series_a',
    'series-b+': 'series_b',
    'raising': 'seed' // default for "currently raising"
  }
  return map[status] || 'other'
}

export function mapFundingRangeToUSD(range: string): number | null {
  if (!range || range === '0') return 0

  const map: Record<string, number> = {
    '1-50k': 25000,
    '50-250k': 150000,
    '250k-1m': 625000,
    '1-5m': 3000000,
    '5m+': 7500000
  }
  return map[range] || null
}

export function inferBusinessModel(sector: string): string {
  // most fintech is b2b, but this is a guess
  if (sector.includes('fintech') || sector === 'infrastructure') {
    return 'B2B'
  }
  return 'B2C' // default
}
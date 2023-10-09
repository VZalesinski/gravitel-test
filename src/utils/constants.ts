export const AUTH_TOKEN = 'auth-token';

export type TFormatStatus = 'all' | 'active' | 'inactive' | 'completed' | null

export const formatProgressBarText = {
  all: 'Всего',
  active: 'Активных',
  inactive: 'Неактивных',
  completed: 'Завершенных',
}

export const formatAmount = (active: number, inactive: number, completed: number, formatValue: TFormatStatus) => {
  switch (formatValue) {
    case 'active':
      return active
    case 'all':
      return active + inactive + completed
    case 'completed':
      return completed
    case 'inactive':
      return inactive
    default:
      return active + inactive + completed
  }
}
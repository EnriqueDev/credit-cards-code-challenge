import { SelectOption } from './CheckCredit'

export const validateName = (name: string): string | null => {
  if (!name) {
    return 'Required'
  }

  if (name.length < 5) {
    return 'Name is too short'
  }

  return null
}

export const validateIncome = (amount: string): string | null => {
  if (!amount) {
    return 'Required'
  }

  try {
    const floatAmount = parseFloat(amount)
    if (floatAmount < 0) {
      return 'Income cannot be negative'
    }

    return null
  } catch (_) {
    return 'Income must be a number'
  }
}

export const validateOccupation = (
  occupation: SelectOption | null,
): string | null => {
  if (!occupation) {
    return 'Please select an occupation'
  }

  return null
}

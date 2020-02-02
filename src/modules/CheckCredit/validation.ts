import dayjs from 'dayjs'

type NullableString = string | null
const REQUIRED_ERROR = 'Required'

export const validateName = (name: NullableString): NullableString => {
  if (!name) {
    return REQUIRED_ERROR
  }

  // Some Asian names are just 2 characters long
  if (name.length < 2) {
    return 'Min. 2 characters'
  }

  return null
}

export const validateIncome = (amount: NullableString): NullableString => {
  if (!amount) {
    return REQUIRED_ERROR
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
  occupation: NullableString,
): NullableString => {
  if (!occupation) {
    return 'Please select an occupation'
  }

  return null
}

export const validateTitle = (title: NullableString): NullableString => {
  if (!title) {
    return REQUIRED_ERROR
  }

  return null
}

export const validateDate = (date: NullableString): NullableString => {
  if (!date) {
    return REQUIRED_ERROR
  }

  const dateObject = dayjs(date)
  const today = dayjs(Date.now())
  const differenceInYears = today.diff(dateObject, 'year', true)

  if (differenceInYears < 18) {
    return 'Must be at least 18'
  }

  if (differenceInYears > 74) {
    return 'Something is wrong with this date'
  }

  return null
}

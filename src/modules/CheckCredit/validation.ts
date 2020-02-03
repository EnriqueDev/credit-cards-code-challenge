import dayjs from 'dayjs'
import { IFormState } from './redux/CheckCredit.reducer'

type NullableString = string | null
const REQUIRED_ERROR = 'Required'
const POSTCODE_VALIDATION_REGEXP = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/

export const validateForm = (formData: IFormState) => {
  const { name, lastName, income, occupation, date, title, postcode } = formData

  const nameError = validateName(name.value)
  const lastNameError = validateName(lastName.value)
  const incomeError = validateIncome(income.value)
  const occupationError = validateOccupation(occupation.value)
  const titleError = validateTitle(title.value)
  const dateError = validateDate(date.value)
  const postCodeError = validatePostCode(postcode.value)

  const hasErrors = Boolean(
    nameError ||
      lastNameError ||
      incomeError ||
      occupationError ||
      titleError ||
      postCodeError ||
      dateError,
  )

  return {
    hasErrors,
    errors: {
      name: nameError,
      lastName: lastNameError,
      income: incomeError,
      occupation: occupationError,
      title: titleError,
      date: dateError,
      postcode: postCodeError,
    },
  }
}

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

  const floatAmount = parseFloat(amount)

  if (isNaN(floatAmount)) {
    return 'Income must be a number'
  }

  if (floatAmount < 0) {
    return 'Income cannot be negative'
  }

  return null
}

export const validateOccupation = (
  occupation: NullableString,
): NullableString => {
  if (!occupation) {
    return REQUIRED_ERROR
  }

  return null
}

export const validateTitle = (title: NullableString): NullableString => {
  if (!title) {
    return REQUIRED_ERROR
  }

  return null
}

export const validateDate = (
  date: NullableString,
  now: number = Date.now(),
): NullableString => {
  if (!date) {
    return REQUIRED_ERROR
  }

  const dateObject = dayjs(date)
  const today = dayjs(now)
  const differenceInYears = today.diff(dateObject, 'year', true)

  if (differenceInYears < 18) {
    return 'Must be at least 18'
  }

  if (differenceInYears > 75) {
    return 'Something is wrong with this date'
  }

  return null
}

export const validatePostCode = (postCode: NullableString): NullableString => {
  if (!postCode) {
    return REQUIRED_ERROR
  }

  const testRegex = RegExp(POSTCODE_VALIDATION_REGEXP)
  const isValid = testRegex.test(postCode)
  console.log(isValid)
  if (!isValid) {
    return 'Postcode not valid'
  }

  return null
}

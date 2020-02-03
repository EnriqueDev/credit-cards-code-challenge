import dayjs from 'dayjs'
import { IFormState } from './redux/CheckCredit.reducer'

type NullableString = string | null
const REQUIRED_ERROR = 'Required'
const POSTCODE_VALIDATION_REGEXT = /^([Gg][Ii][Rr]0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$/

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

const validatePostCode = (postCode: NullableString): NullableString => {
  if (!postCode) {
    return REQUIRED_ERROR
  }

  const isValid = Boolean(
    postCode.replace(' ', '').match(POSTCODE_VALIDATION_REGEXT),
  )
  if (!isValid) {
    return 'Postcode not valid'
  }

  return null
}

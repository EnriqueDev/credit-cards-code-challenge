import { IFormState } from './CheckCredit.reducer'
import { Action } from 'redux'

export const EDIT_CHECK_CREDIT_FIELD = 'EDIT_CHECK_CREDIT_FIELD'
export const SET_FORM_ERRORS = 'SET_FORM_ERRORS'

interface IEditCheckCreditFieldAction {
  payload: {
    key: keyof IFormState
    value: string
  }
  type: typeof EDIT_CHECK_CREDIT_FIELD
}

export const editCheckCreditField = (
  key: keyof IFormState,
  value: string,
): IEditCheckCreditFieldAction => ({
  payload: {
    key,
    value,
  },
  type: EDIT_CHECK_CREDIT_FIELD,
})

export type FormErrors = { [key in keyof IFormState]: string | null }

interface ISetFormErrorsAction {
  payload: FormErrors
  type: typeof SET_FORM_ERRORS
}

export const setFormErrors = (
  formErrors: FormErrors,
): ISetFormErrorsAction => ({
  payload: formErrors,
  type: SET_FORM_ERRORS,
})

export type CheckCreditActions =
  | IEditCheckCreditFieldAction
  | ISetFormErrorsAction

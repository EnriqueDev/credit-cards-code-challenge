import { produce } from 'immer'
import {
  EDIT_CHECK_CREDIT_FIELD,
  CheckCreditActions,
  SET_FORM_ERRORS,
  FormErrors,
} from './CheckCredit.actions'
import { Reducer } from 'redux'

const INITIAL_FORM_VALUE = { value: '', error: null }

interface IFormFieldState {
  value: string
  error: string | null
}

export interface IFormState {
  name: IFormFieldState
  occupation: IFormFieldState
  income: IFormFieldState
}

export interface ICheckCreditState extends IFormState {}

const INITIAL_STATE: ICheckCreditState = {
  name: INITIAL_FORM_VALUE,
  occupation: INITIAL_FORM_VALUE,
  income: INITIAL_FORM_VALUE,
}

export const checkCreditReducer: Reducer<
  ICheckCreditState,
  CheckCreditActions
> = (state: ICheckCreditState = INITIAL_STATE, action: CheckCreditActions) => {
  return produce(state, draft => {
    switch (action.type) {
      case EDIT_CHECK_CREDIT_FIELD:
        draft[action.payload.key].value = action.payload.value
        break

      case SET_FORM_ERRORS:
        const data = action.payload
        const keys = Object.keys(data) as (keyof FormErrors)[]

        keys.forEach(key => {
          const element = data[key]

          draft[key].error = element
        })
        break
    }
  })
}

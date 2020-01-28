import { produce } from 'immer'
import { Reducer } from 'redux'
import {
  ResultActions,
  SET_RESULT_LOADING,
  SET_RESULT_DATA,
} from './Result.actions'
import { ICreditCard } from '../../../services/credit'

interface IResultReducerState {
  isLoading: boolean
  data: ICreditCard[]
}

const INITIAL_STATE: IResultReducerState = {
  isLoading: false,
  data: [],
}

export const resultReducer: Reducer<IResultReducerState, ResultActions> = (
  state: IResultReducerState = INITIAL_STATE,
  action: ResultActions,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case SET_RESULT_LOADING:
        draft.isLoading = true
        break

      case SET_RESULT_DATA:
        draft.data = action.payload
        draft.isLoading = false
        break
    }
  })
}

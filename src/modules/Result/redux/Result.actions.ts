import { ICreditCard } from '../../../services/credit'

export const SET_RESULT_LOADING = 'SET_RESULT_LOADING'
export const SET_RESULT_DATA = 'SET_RESULT_DATA'

interface ISetResultLoading {
  type: typeof SET_RESULT_LOADING
}

export const setResultLoading = (): ISetResultLoading => ({
  type: SET_RESULT_LOADING,
})

interface ISetResultData {
  type: typeof SET_RESULT_DATA
  payload: ICreditCard[]
}

export const setResultData = (data: ICreditCard[]): ISetResultData => ({
  type: SET_RESULT_DATA,
  payload: data,
})

export type ResultActions = ISetResultLoading | ISetResultData

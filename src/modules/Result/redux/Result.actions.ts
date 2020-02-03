import { ICreditCard } from '../../../services/credit'

export const SET_RESULT_LOADING = 'SET_RESULT_LOADING'
export const SET_RESULT_DATA = 'SET_RESULT_DATA'
export const SELECT_RESULT_CARD = 'SELECT_RESULT_CARD'
export const DESELECT_RESULT_CARD = 'DESELECT_RESULT_CARD'
export const SET_RESULT_ERROR = 'SET_RESULT_ERROR'

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

interface ISelectResultCard {
  type: typeof SELECT_RESULT_CARD
  payload: number
}

export const selectResultCard = (id: number): ISelectResultCard => ({
  type: SELECT_RESULT_CARD,
  payload: id,
})

interface IDeselectResultCard {
  type: typeof DESELECT_RESULT_CARD
  payload: number
}

export const deselectResultCard = (id: number): IDeselectResultCard => ({
  type: DESELECT_RESULT_CARD,
  payload: id,
})

interface ISetResultError {
  type: typeof SET_RESULT_ERROR
}

export const setResultError = (): ISetResultError => ({
  type: SET_RESULT_ERROR,
})

export type ResultActions =
  | ISetResultLoading
  | ISetResultData
  | ISelectResultCard
  | IDeselectResultCard
  | ISetResultError

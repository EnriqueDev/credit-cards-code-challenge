import { ThunkResult } from 'src/store/types'
import {
  setResultLoading,
  setResultData,
  setResultError,
} from './Result.actions'

export const startResultPage = (
  income: number,
  occupation: string,
): ThunkResult<void> => async (dispatch, _, { creditCardsEndPoint }) => {
  dispatch(setResultLoading())

  try {
    const data = await creditCardsEndPoint.fetchAvailableCreditCards(
      income,
      occupation,
    )

    dispatch(setResultData(data))
  } catch (e) {
    dispatch(setResultError())
  }
}

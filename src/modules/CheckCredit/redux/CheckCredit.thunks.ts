import { ThunkResult } from 'src/store/types'

export const fetchCreditData = (
  occupation: string,
  income: number,
): ThunkResult<void> => async (dispatch, _, { creditCardsEndPoint }) => {
  const data = await creditCardsEndPoint.fetchAvailableCreditCards(
    income,
    occupation,
  )
}

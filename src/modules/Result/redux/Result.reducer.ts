import { produce } from 'immer'
import { Reducer } from 'redux'
import {
  ResultActions,
  SET_RESULT_LOADING,
  SET_RESULT_DATA,
} from './Result.actions'
import { ICreditCard } from '../../../services/credit'

type CreditCardsById = { [id: number]: ICreditCard }

interface IResultReducerState {
  isLoading: boolean
  cards: CreditCardsById
  cardIds: number[]
}

const INITIAL_STATE: IResultReducerState = {
  isLoading: false,
  cards: {},
  cardIds: [],
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
        const payload = action.payload

        const cardIds = payload.map(card => card.id)
        const cards = indexById(payload)

        draft.cards = cards
        draft.cardIds = cardIds
        draft.isLoading = false

        break
    }
  })
}

// This should be a generic function but it's out of the scope of this challenge
const indexById = (cards: ICreditCard[]): CreditCardsById => {
  const result: CreditCardsById = {}
  cards.forEach(card => {
    result[card.id] = card
  })
  return result
}

import { produce } from 'immer'
import { Reducer } from 'redux'
import {
  ResultActions,
  SET_RESULT_LOADING,
  SET_RESULT_DATA,
  SELECT_RESULT_CARD,
  DESELECT_RESULT_CARD,
  SET_RESULT_ERROR,
} from './Result.actions'
import { ICreditCard } from '../../../services/credit'

type CreditCardsById = { [id: number]: ICreditCard }

export interface IResultReducerState {
  isLoading: boolean
  cards: CreditCardsById
  cardIds: number[]
  selectedCardIds: number[]
  requestFailed: boolean
}

export const INITIAL_STATE: IResultReducerState = {
  isLoading: false,
  cards: {},
  cardIds: [],
  selectedCardIds: [],
  requestFailed: false,
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

      case SET_RESULT_ERROR:
        draft.requestFailed = true
        break

      case SELECT_RESULT_CARD:
        const id = action.payload
        if (draft.selectedCardIds.includes(id)) {
          throw new Error('Attempting to select a card twice')
        }
        draft.selectedCardIds.push(id)
        break

      case DESELECT_RESULT_CARD:
        const selectedIds = draft.selectedCardIds
        if (!selectedIds.length || !selectedIds.includes(action.payload)) {
          throw new Error('Attempted to remove a nonexisting element')
        }

        draft.selectedCardIds.splice(selectedIds.indexOf(action.payload), 1)
        break

      case SET_RESULT_DATA:
        const payload = action.payload

        if (!payload.length) {
          draft.isLoading = false
          break
        }

        const cardIds = payload.map(card => card.id)
        const cards = indexById(action.payload)

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

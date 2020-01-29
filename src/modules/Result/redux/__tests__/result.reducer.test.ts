import {
  resultReducer,
  IResultReducerState,
  INITIAL_STATE,
} from '../Result.reducer'
import {
  selectResultCard,
  deselectResultCard,
  setResultData,
  setResultLoading,
} from '../Result.actions'
import { mockCards } from './creditCards.mock'

describe('Result Reducer', () => {
  let state: IResultReducerState

  beforeEach(() => {
    state = { ...INITIAL_STATE }
  })

  describe('receives a SET_RESULT_DATA action', () => {
    it('should set the loading state to true', () => {
      const action = setResultLoading()
      const { isLoading } = resultReducer(state, action)
      expect(isLoading).toBe(true)
    })
  })

  describe('receives a SET_RESULT_DATA action', () => {
    it('should set an array with the card ids', () => {
      const action = setResultData(mockCards)
      const { cardIds } = resultReducer(state, action)
      expect(cardIds).toHaveLength(2)
      expect(cardIds).toEqual([0, 1])
    })
    it('should set an id-indexed containing the cards', () => {
      const action = setResultData(mockCards)
      const { cards } = resultReducer(state, action)
      expect(Object.keys(cards)).toHaveLength(2)
      expect(cards[0]).toEqual(mockCards[0])
      expect(cards[1]).toEqual(mockCards[1])
    })
    it('should end the loading state', () => {
      state.isLoading = true
      const action = setResultData(mockCards)
      const { isLoading } = resultReducer(state, action)
      expect(isLoading).toBe(false)
    })
    it('should set empty data when the cards data is empty', () => {
      state.isLoading = true
      const action = setResultData([])
      const { isLoading, cards, cardIds } = resultReducer(state, action)
      expect(isLoading).toBe(false)
      expect(cardIds).toHaveLength(0)
      expect(Object.keys(cards)).toHaveLength(0)
    })
  })

  describe('receives a SELECT_RESULT_CARD action', () => {
    it('should mark the id as selected', () => {
      const action = selectResultCard(1)
      const { selectedCardIds } = resultReducer(state, action)

      expect(selectedCardIds).toHaveLength(1)
      expect(selectedCardIds).toContain(1)
    })

    it('should throw an error if requested to add an existing id', () => {
      state.selectedCardIds = [1]

      const produceThrowingState = () =>
        resultReducer(state, selectResultCard(1))

      expect(produceThrowingState).toThrow()
    })
  })

  describe('receives a DESELECT_RESULT_CARD action', () => {
    it('should remove the id if it exists', () => {
      state.selectedCardIds = [1]
      const action = deselectResultCard(1)
      const { selectedCardIds } = resultReducer(state, action)

      expect(selectedCardIds).toHaveLength(0)
    })

    it('should throw an error if received with an empty state', () => {
      const throwingState = () => resultReducer(state, deselectResultCard(1))
      expect(throwingState).toThrow()
    })

    it('should throw an error if trying to remove a nonexistent id', () => {
      state.selectedCardIds = [9, 2]
      const throwingState = () => resultReducer(state, deselectResultCard(1))
      expect(throwingState).toThrow()
    })
  })
})

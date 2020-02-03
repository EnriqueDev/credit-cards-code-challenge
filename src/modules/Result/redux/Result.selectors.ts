import { RootState } from '../../../store/reducers'
import { ICreditCard } from 'src/services/credit'

export const creditCardsSelector = ({ result }: RootState): ICreditCard[] => {
  return result.cardIds.map(id => result.cards[id])
}

export const selectedCardsSelector = ({ result }: RootState) => {
  const selectedIds = result.selectedCardIds
  return {
    selectedIds,
    selectedCards: selectedIds.map(id => result.cards[id]),
    totalSelected: selectedIds.reduce(
      (acc, id) => acc + result.cards[id].creditAvailable,
      0,
    ),
  }
}

export const errorSelector = ({ result }: RootState) => {
  return result.requestFailed
}

import { RootState } from '../../../store/reducers'
import { ICreditCard } from 'src/services/credit'

export const creditCardsSelector = ({ result }: RootState): ICreditCard[] => {
  return result.cardIds.map(id => result.cards[id])
}

export const selectedIdsSelector = ({ result }: RootState): number[] => {
  return result.selectedCardIds
}

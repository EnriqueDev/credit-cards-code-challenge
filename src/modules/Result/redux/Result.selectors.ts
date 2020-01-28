import { RootState } from '../../../store/reducers'
import { ICreditCard } from 'src/services/credit'

export const creditCardsSelector = ({ result }: RootState): ICreditCard[] => {
  return result.data
}

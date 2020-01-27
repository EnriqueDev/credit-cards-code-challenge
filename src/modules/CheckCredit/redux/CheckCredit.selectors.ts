import { RootState } from '../../../store/reducers'
import { IFormState } from './CheckCredit.reducer'

export const formDataSelector = ({ checkCredit }: RootState): IFormState => {
  return {
    name: checkCredit.name,
    income: checkCredit.income,
    occupation: checkCredit.occupation,
  }
}

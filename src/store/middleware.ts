import thunkMiddleware from 'redux-thunk'
import { creditCardsEndPoint, ICreditCardsEndpoint } from '../services/credit'

export interface IThunkMiddlewareExtraArgument {
  creditCardsEndPoint: ICreditCardsEndpoint
}

export const middlewares = [
  // TODO Service implementation placeholder
  thunkMiddleware.withExtraArgument<IThunkMiddlewareExtraArgument>({
    creditCardsEndPoint: creditCardsEndPoint,
  }),
]

import thunkMiddleware from 'redux-thunk'

export interface IThunkMiddlewareExtraArgument {
  creditCardsEndPoint: {}
}

export const middlewares = [
  // TODO Service implementation placeholder
  thunkMiddleware.withExtraArgument<IThunkMiddlewareExtraArgument>({
    creditCardsEndPoint: {},
  }),
]

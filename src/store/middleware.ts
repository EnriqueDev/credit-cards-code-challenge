import thunkMiddleware from 'redux-thunk'

export interface IThunkMiddlewareExtraArgument {
  endpoint: {}
}

export const middlewares = [
  // TODO Service implementation placeholder
  thunkMiddleware.withExtraArgument<IThunkMiddlewareExtraArgument>({
    endpoint: {},
  }),
]

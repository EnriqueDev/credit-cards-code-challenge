import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import { middlewares } from './middleware'
import { rootReducer } from './reducers'

export const forgeStore = (preloadedState = {}) => {
  let middlewareEnhancer = applyMiddleware(...middlewares)

  const storeEnhancers = [middlewareEnhancer]

  const composedEnhancers = composeWithDevTools(...storeEnhancers)

  return createStore(rootReducer, preloadedState, composedEnhancers)
}

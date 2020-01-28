import { checkCreditReducer } from '../modules/CheckCredit/redux/CheckCredit.reducer'
import { combineReducers } from 'redux'
import { resultReducer } from '../modules/Result/redux/Result.reducer'

export const rootReducer = combineReducers({
  checkCredit: checkCreditReducer,
  result: resultReducer,
})

export type RootState = ReturnType<typeof rootReducer>

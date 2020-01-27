import { checkCreditReducer } from '../modules/CheckCredit/redux/CheckCredit.reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  checkCredit: checkCreditReducer,
})

export type RootState = ReturnType<typeof rootReducer>

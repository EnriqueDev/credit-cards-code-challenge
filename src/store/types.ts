import { ThunkAction } from 'redux-thunk'
import { RootState } from './reducers'
import { IThunkMiddlewareExtraArgument } from './middleware'
import { CheckCreditActions } from 'src/modules/CheckCredit/redux/CheckCredit.actions'

type RootActions = CheckCreditActions

export type ThunkResult<R> = ThunkAction<
  R,
  RootState,
  IThunkMiddlewareExtraArgument,
  RootActions
>

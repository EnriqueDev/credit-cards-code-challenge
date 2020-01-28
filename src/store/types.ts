import { ThunkAction } from 'redux-thunk'
import { RootState } from './reducers'
import { IThunkMiddlewareExtraArgument } from './middleware'
import { CheckCreditActions } from 'src/modules/CheckCredit/redux/CheckCredit.actions'
import { ResultActions } from 'src/modules/Result/redux/Result.actions'

type RootActions = CheckCreditActions | ResultActions

export type ThunkResult<R> = ThunkAction<
  R,
  RootState,
  IThunkMiddlewareExtraArgument,
  RootActions
>

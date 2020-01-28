import React from 'react'
import { Redirect, RouteChildrenProps, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startResultPage } from './redux/Result.thunks'
import { creditCardsSelector } from './redux/Result.selectors'

interface LocationState {
  name: string
  occupation: string
  income: number
}

export const Result: React.FC<RouteChildrenProps<{}, LocationState>> = ({
  location,
}) => {
  const dispatch = useDispatch()
  const state = location.state
  React.useEffect(() => {
    if (!state) {
      return
    }
    dispatch(startResultPage(state.income, state.occupation))
  }, [state])
  const result = useSelector(creditCardsSelector)
  if (!state) {
    return <Redirect to="/" />
  }

  return <div>{result.map(card => card.name)}</div>
}

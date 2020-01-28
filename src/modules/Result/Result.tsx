import React from 'react'
import { Redirect, RouteChildrenProps, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startResultPage } from './redux/Result.thunks'
import { creditCardsSelector } from './redux/Result.selectors'
import { CardDetails } from './Components/CardDetails'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 0 20px;
  margin: 0 auto;
`

const StyledCardDetails = styled(CardDetails)`
  margin-top: 10px;

  &:first-child {
    margin-top: 30px;
  }
`

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

  return (
    <Container>
      {result.map(card => (
        <StyledCardDetails card={card} />
      ))}
    </Container>
  )
}

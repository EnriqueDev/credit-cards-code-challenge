import React from 'react'
import { Redirect, RouteChildrenProps, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startResultPage } from './redux/Result.thunks'
import {
  creditCardsSelector,
  selectedCardsSelector,
} from './redux/Result.selectors'
import { CardDetails } from './components/CardDetails'
import styled from 'styled-components'
import { selectResultCard, deselectResultCard } from './redux/Result.actions'
import { SelectionInfo } from './components/SelectionInfo'

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

const StyledSelectionInfo = styled(SelectionInfo)`
  margin-top: 40px;
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
  const { selectedIds, totalSelected, selectedCards } = useSelector(
    selectedCardsSelector,
  )

  if (!state) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      {result.map(card => {
        const isSelected = selectedIds.includes(card.id)
        return (
          <StyledCardDetails
            onButtonClick={() =>
              isSelected
                ? dispatch(deselectResultCard(card.id))
                : dispatch(selectResultCard(card.id))
            }
            isSelected={isSelected}
            key={card.id}
            card={card}
          />
        )
      })}
      <StyledSelectionInfo cards={selectedCards} total={totalSelected} />
    </Container>
  )
}

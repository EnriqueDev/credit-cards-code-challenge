import React from 'react'
import { Redirect, RouteChildrenProps } from 'react-router-dom'
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

const Page = styled.div`
  min-width: 550px;
`

const Container = styled.div`
  padding: 40px 20px;
  max-width: 1000px;
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

  // Note: this should have been done on click on the previous page,
  // then an action on redux to start-up this page and finally navigate.
  // It was done this way only to show hooks knowledge
  React.useEffect(() => {
    if (state) {
      dispatch(startResultPage(state.income, state.occupation))
    }
  }, [state])

  if (!state) {
    return <Redirect to="/" />
  }

  const result = useSelector(creditCardsSelector)
  const { selectedIds, totalSelected, selectedCards } = useSelector(
    selectedCardsSelector,
  )

  return (
    <Page>
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
    </Page>
  )
}

import * as React from 'react'
import styled from 'styled-components'
import { RaisedContainer } from '../../../components/RaisedContainer'
import { ICreditCard } from '../../../services/credit'
import { borderColor } from '../../../constants/colors'

const Container = styled(RaisedContainer)`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`

const Title = styled.p`
  font-size: 20;
  font-weight: bold;
  margin: 15px 0;
`

const CardsDataContainer = styled.ul`
  display: flex;
  flex: 1 0 100%;
  width: 100%;
  flex-direction: column;
`

const CardData = styled.li`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
  display: flex;
  width: 100%;
`

const Dotted = styled.span`
  flex: 1 0 auto;
  margin: 0 10px;
  border-bottom: 1px dashed ${borderColor};
`

const TotalContainer = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 20px;
`

interface IProps {
  cards: ICreditCard[]
  total: number
  className?: string
}

export const SelectionInfo: React.FC<IProps> = ({
  cards,
  total,
  className,
}) => {
  if (!cards.length) {
    return (
      <Container className={className}>
        <strong>Select a card!</strong>
      </Container>
    )
  }

  return (
    <Container className={className}>
      <Title>You have selected:</Title>
      <CardsDataContainer>
        {cards.map(card => (
          <CardData>
            <span>{card.name}</span>
            <Dotted />
            <span>£ {card.creditAvailable}</span>
          </CardData>
        ))}
      </CardsDataContainer>
      <TotalContainer>Total: £ {total}</TotalContainer>
    </Container>
  )
}

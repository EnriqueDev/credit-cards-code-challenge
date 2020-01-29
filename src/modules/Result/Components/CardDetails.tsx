import * as React from 'react'
import styled from 'styled-components'
import { ICreditCard } from '../../../services/credit'
import { RaisedContainer } from '../../../components/RaisedContainer'
import Button from '../../../components/Button'

const Container = styled(RaisedContainer)`
  display: flex;
  flex-direction: row;
`

const CardValue = styled.div`
  padding: 15px 20px;
  position: relative;
  display: flex;
  max-width: 150px;
  justify-content: space-between;
  flex-direction: column;

  border-left: 1px solid #ccc;
`

const CardName = styled.div`
  padding: 0 30px;
  flex: 1 0 100px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`

const Value = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  justify-content: center;
`

const AmountContainer = styled.div`
  display: flex;
  flex: 0 1 150px;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  color: green;
  font-weight: bolder;
  font-size: 20px;
`

interface IProps {
  card: ICreditCard
  isSelected: boolean
  onButtonClick: () => void
  className?: string
}

export const CardDetails: React.FC<IProps> = ({
  card,
  className,
  onButtonClick,
  isSelected = false,
}) => {
  return (
    <Container className={className}>
      <CardName>{card.name}</CardName>
      <ValuesContainer>
        <CardValue>
          <p>Balance Transfer offer duration</p>
          <Value>{card.balanceTransferOfferDuration} months</Value>
        </CardValue>
        <CardValue>
          <p>0% Purchase offer duration</p>
          <Value>{card.purchaseOfferDuration} months</Value>
        </CardValue>
        <CardValue>
          <p>Rep % APR</p>
          <Value>{card.apr} %</Value>
        </CardValue>
        <CardValue>
          <p>Credit</p>
          <Value>£ {card.creditAvailable}</Value>
        </CardValue>
      </ValuesContainer>
      <AmountContainer>
        <Button onClick={onButtonClick}>
          {isSelected ? 'Remove' : 'Select'}
        </Button>
      </AmountContainer>
    </Container>
  )
}

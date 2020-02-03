import * as React from 'react'
import styled from 'styled-components'
import { ICreditCard } from '../../../services/credit'
import { borderColor } from '../../../constants/colors'
import Button from '../../../components/Button'

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  padding: 20px;
  border: 1px solid ${borderColor};
  border-radius: 5px;
  flex-direction: column;
`

const CardName = styled.strong`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bolder;
  padding: 10px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`

const Value = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`

const Values = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  justify-content: space-between;
`

const CardValue = styled.div`
  padding: 15px 20px 15px 10px;
  position: relative;
  display: flex;
  max-width: 150px;
  justify-content: space-around;
  flex-direction: column;

  border-left: 1px solid #ccc;

  &:first-child {
    border-left-width: 0;
  }

  &:last-child {
    flex: 0 0 auto;
  }
`

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;

  @media only screen and (min-width: 800px) {
    width: 100px;
    height: 50px;
    margin: 0 20px;
    align-self: center;
  }
`

interface IProps {
  card: ICreditCard
  isSelected: boolean
  onButtonClick: () => void
  className?: string
}

export const CardDetails: React.FC<IProps> = ({
  card,
  isSelected,
  onButtonClick,
  className,
}) => {
  return (
    <Container className={className}>
      <CardName>{card.name}</CardName>
      <Content>
        <Values>
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
        </Values>
        <StyledButton onClick={onButtonClick}>
          {isSelected ? 'Remove' : 'Select'}
        </StyledButton>
      </Content>
    </Container>
  )
}

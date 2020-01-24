import * as React from 'react'
import styled from 'styled-components'
import { RaisedContainer } from '../../components/RaisedContainer'
import TextInput from './TextInput/TextInput'
import Select from 'react-select'
import Button from '../../components/Button'

type SelectOption = {
  value: string
  label: string
}

const SELECT_OPTIONS: SelectOption[] = [
  { value: 'full_time', label: 'Full Time' },
  { value: 'part_time', label: 'Part Time' },
  { value: 'student', label: 'Student' },
]

const Container = styled.section`
  display: flex;
  flex: 1 0 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const StyledTextInput = styled(TextInput)`
  margin-top: 30px;
  min-width: 250px;

  &:first-child {
    margin-top: 0;
  }
`

const StyledSelect = styled(Select)`
  margin-top: 30px;
`

const StyledButton = styled(Button)`
  margin-top: 30px;
  width: 100%;
`

export const CheckCredit: React.FC = () => {
  const [name, setName] = React.useState<string>('')
  const [income, setIncome] = React.useState<string>('')
  const [occupation, setOccupation] = React.useState<SelectOption | null>(null)

  const handleOnSubmit = React.useCallback(
    e => {
      e.preventDefault()
      console.log('>> name', name)
      console.log('>> income', income)
      console.log('>> occupation', occupation)
    },
    [name, income, occupation],
  )

  return (
    <Container>
      <RaisedContainer as="form">
        <StyledTextInput
          label={'Name'}
          placeholder={'John Smith'}
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
        <StyledTextInput
          label={'Yearly Income'}
          placeholder={'30000'}
          min={0}
          value={income}
          type={'number'}
          onChange={e => setIncome(e.currentTarget.value)}
        />
        <StyledSelect
          placeholder="Select your occupation"
          options={SELECT_OPTIONS}
          onChange={(value: SelectOption) => setOccupation(value)}
        />
        <StyledButton onClick={handleOnSubmit}>Submit</StyledButton>
      </RaisedContainer>
    </Container>
  )
}

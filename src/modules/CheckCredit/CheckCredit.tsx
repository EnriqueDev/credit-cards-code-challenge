import * as React from 'react'
import styled from 'styled-components'
import { RaisedContainer } from '../../components/RaisedContainer'
import TextInput, { StyledErrorText } from './TextInput/TextInput'
import Select from 'react-select'
import Button from '../../components/Button'
import { validateName, validateOccupation, validateIncome } from './validation'

export type SelectOption = {
  value: string
  label: string
}

const SELECT_OPTIONS: SelectOption[] = [
  { value: 'full_time', label: 'Full Time' },
  { value: 'part_time', label: 'Part Time' },
  { value: 'student', label: 'Student' },
]

const SelectContainer = styled.div`
  position: relative;
`

const SelectError = styled(StyledErrorText)`
  bottom: -15px;
`

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
  margin-top: 40px;
`

const StyledButton = styled(Button)`
  margin-top: 40px;
  width: 100%;
`

export const CheckCredit: React.FC = () => {
  const [name, setName] = React.useState<string>('')
  const [nameError, setNameError] = React.useState<string | null>(null)
  const [income, setIncome] = React.useState<string>('')
  const [incomeError, setIncomeError] = React.useState<string | null>(null)
  const [occupation, setOccupation] = React.useState<SelectOption | null>(null)
  const [occupationError, setOccupationError] = React.useState<string | null>(
    null,
  )

  const handleOnSubmit = React.useCallback(
    e => {
      e.preventDefault()
      const nameValidationError = validateName(name)
      nameValidationError
        ? setNameError(nameValidationError)
        : setNameError(null)

      const incomeValidationError = validateIncome(income)
      incomeValidationError
        ? setIncomeError(incomeValidationError)
        : setIncomeError(null)

      const occupationValidationError = validateOccupation(occupation)
      occupationValidationError
        ? setOccupationError(occupationValidationError)
        : setOccupationError(null)

      if (
        !nameValidationError &&
        !incomeValidationError &&
        !occupationValidationError
      ) {
        console.log('Valid!')
      }
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
          error={nameError}
          onChange={e => setName(e.currentTarget.value)}
        />
        <StyledTextInput
          label={'Yearly Income'}
          placeholder={'30000'}
          min={0}
          value={income}
          type={'number'}
          error={incomeError}
          onChange={e => setIncome(e.currentTarget.value)}
        />
        <SelectContainer>
          <StyledSelect
            placeholder="Select your occupation"
            options={SELECT_OPTIONS}
            onChange={(value: SelectOption) => setOccupation(value)}
          />
          {Boolean(occupationError) && (
            <SelectError>{occupationError}</SelectError>
          )}
        </SelectContainer>
        <StyledButton onClick={handleOnSubmit}>Submit</StyledButton>
      </RaisedContainer>
    </Container>
  )
}

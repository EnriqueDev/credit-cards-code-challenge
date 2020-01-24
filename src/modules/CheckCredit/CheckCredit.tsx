import * as React from 'react'
import styled from 'styled-components'
import { RaisedContainer } from '../../components/RaisedContainer'
import { TextInput, FormFieldContainer } from './components'
import Button from '../../components/Button'
import { validateName, validateOccupation, validateIncome } from './validation'
import Select from 'react-select'

const SELECT_OPTIONS = [
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
  min-width: 250px;
`

const StyledFormWrapper = styled(FormFieldContainer)`
  margin-bottom: 30px;
`

const StyledButton = styled(Button)`
  margin-top: 10px;
  width: 100%;
`

export const CheckCredit: React.FC = () => {
  const [name, setName] = React.useState<string>('')
  const [nameError, setNameError] = React.useState<string | null>(null)
  const [income, setIncome] = React.useState<string>('')
  const [incomeError, setIncomeError] = React.useState<string | null>(null)
  const [occupation, setOccupation] = React.useState<unknown | null>(null)
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
        <StyledFormWrapper label={'Name'} error={nameError}>
          <StyledTextInput
            placeholder={'John Smith'}
            value={name}
            onChange={e => setName(e.currentTarget.value)}
          />
        </StyledFormWrapper>

        <StyledFormWrapper label={'Yearly Income'} error={incomeError}>
          <StyledTextInput
            placeholder={'30000'}
            min={0}
            value={income}
            type={'number'}
            onChange={e => setIncome(e.currentTarget.value)}
          />
        </StyledFormWrapper>

        <StyledFormWrapper error={occupationError} label={'Occupation'}>
          <Select
            placeholder="Select your occupation"
            options={SELECT_OPTIONS}
            onChange={(value, _) => setOccupation(value)}
          />
        </StyledFormWrapper>

        <StyledButton onClick={handleOnSubmit}>Submit</StyledButton>
      </RaisedContainer>
    </Container>
  )
}

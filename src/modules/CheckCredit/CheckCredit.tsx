import * as React from 'react'
import styled from 'styled-components'
import { RaisedContainer } from '../../components/RaisedContainer'
import { TextInput, FormFieldContainer } from './components'
import Button from '../../components/Button'
import { validateName, validateOccupation, validateIncome } from './validation'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { formDataSelector } from './redux/CheckCredit.selectors'
import {
  editCheckCreditField,
  setFormErrors,
} from './redux/CheckCredit.actions'
import { IFormState } from './redux/CheckCredit.reducer'

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
  const { name, income, occupation } = useSelector(formDataSelector)
  const dispatch = useDispatch()

  const updateValue = React.useCallback(
    (key: keyof IFormState, value: string) => {
      dispatch(editCheckCreditField(key, value))
    },
    [],
  )

  const handleOnSubmit = React.useCallback(
    e => {
      e.preventDefault()
      const errors = {
        name: validateName(name.value),
        income: validateIncome(income.value),
        occupation: validateOccupation(occupation.value),
      }

      if (Object.values(errors).some(value => typeof value === 'string')) {
        dispatch(setFormErrors(errors))
        return
      }

      console.log('>> setFormIs valid')
    },
    [name.value, income.value, occupation.value, dispatch],
  )

  return (
    <Container>
      <RaisedContainer as="form">
        <StyledFormWrapper label={'Name'} error={name.error}>
          <StyledTextInput
            placeholder={'John Smith'}
            value={name.value}
            onChange={e => updateValue('name', e.currentTarget.value)}
          />
        </StyledFormWrapper>

        <StyledFormWrapper label={'Yearly Income'} error={income.error}>
          <StyledTextInput
            placeholder={'30000'}
            min={0}
            value={income.value}
            type={'number'}
            onChange={e => updateValue('income', e.currentTarget.value)}
          />
        </StyledFormWrapper>

        <StyledFormWrapper error={occupation.error} label={'Occupation'}>
          <Select
            placeholder="Select your occupation"
            options={SELECT_OPTIONS}
            onChange={value =>
              updateValue('occupation', (value as any).value as string)
            }
          />
        </StyledFormWrapper>

        <StyledButton onClick={handleOnSubmit}>Submit</StyledButton>
      </RaisedContainer>
    </Container>
  )
}

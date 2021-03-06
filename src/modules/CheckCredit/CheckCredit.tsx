import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'

import { TextInput, FormFieldContainer } from './components'
import Button from '../../components/Button'
import { IFormState } from './redux/CheckCredit.reducer'

import { validateForm } from './validation'
import { formDataSelector } from './redux/CheckCredit.selectors'
import {
  editCheckCreditField,
  setFormErrors,
} from './redux/CheckCredit.actions'

import { TITLE_OPTIONS, EMPLOYMENT_STATUS_OPTIONS } from './constants'
import { Dropdown } from './components/Dropdown'

const Wrapper = styled.section`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  justify-content: center;
`

const Container = styled.form`
  max-width: 400px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 100px;
  min-height: 100%;
  background-color: #fff;
`

const StyledTextInput = styled(TextInput)<{ marginTop?: number }>`
  width: 100%;

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}
`

const StyledFormWrapper = styled(FormFieldContainer)`
  margin-top: 30px;
`

const StyledButton = styled(Button)`
  margin-top: 30px;
  width: 100%;
`

export const CheckCredit: React.FC = () => {
  const formData = useSelector(formDataSelector)
  const { name, lastName, income, occupation, date, title, postcode } = formData
  const dispatch = useDispatch()
  const router = useHistory()

  const updateValue = React.useCallback(
    (key: keyof IFormState, value: string) => {
      dispatch(editCheckCreditField(key, value))
    },
    [],
  )

  const handleOnSubmit = React.useCallback(
    e => {
      e.preventDefault()
      const { hasErrors, errors } = validateForm(formData)

      if (hasErrors) {
        dispatch(setFormErrors(errors))
        return
      }

      // Note: the API call should have been done here, but to show
      // hooks knowledge it was done on the result screen. In a real world application
      // this would not be correct because it wount allow us to send feedback to the user
      // in case the request fails.
      router.push('/result', {
        name: name.value,
        income: income.value,
        occupation: occupation.value,
      })
    },
    [formData, dispatch],
  )

  return (
    <Wrapper>
      <Container>
        <StyledFormWrapper label={'Title'} error={name.error}>
          <Dropdown
            placeholder="Select your title"
            options={TITLE_OPTIONS}
            onChange={value =>
              updateValue('title', (value as any).value as string)
            }
            error={title.error}
          />
        </StyledFormWrapper>
        <StyledFormWrapper label={'Name'}>
          <StyledTextInput
            placeholder={'Daniel'}
            value={name.value}
            error={name.error}
            onChange={e => updateValue('name', e.currentTarget.value)}
          />

          <StyledTextInput
            placeholder={'Schwimmer'}
            value={lastName.value}
            marginTop={15}
            error={lastName.error}
            onChange={e => updateValue('lastName', e.currentTarget.value)}
          />
        </StyledFormWrapper>

        <StyledFormWrapper label={'Postcode'}>
          <StyledTextInput
            placeholder={'SW15 5PU'}
            value={postcode.value}
            type={'text'}
            error={postcode.error}
            onChange={e => updateValue('postcode', e.currentTarget.value)}
          />
        </StyledFormWrapper>

        <StyledFormWrapper label={'Annual Income'}>
          <StyledTextInput
            placeholder={'30000'}
            min={0}
            value={income.value}
            type={'number'}
            error={income.error}
            onChange={e => updateValue('income', e.currentTarget.value)}
          />
        </StyledFormWrapper>

        <StyledFormWrapper label={'Employment Status'}>
          <Dropdown
            placeholder="Select your status"
            options={EMPLOYMENT_STATUS_OPTIONS}
            onChange={value =>
              updateValue('occupation', (value as any).value as string)
            }
            error={occupation.error}
          />
        </StyledFormWrapper>

        <StyledFormWrapper label={'Date of Birth'}>
          <TextInput
            type="date"
            value={date.value}
            error={date.error}
            onChange={e => updateValue('date', e.currentTarget.value)}
          />
        </StyledFormWrapper>

        <StyledButton onClick={handleOnSubmit}>Submit</StyledButton>
      </Container>
    </Wrapper>
  )
}

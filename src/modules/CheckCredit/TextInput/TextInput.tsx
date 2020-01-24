import * as React from 'react'
import styled from 'styled-components'
import {
  primaryColor,
  borderColor,
  hoverBorderColor,
  errorColor,
} from '../../../constants/colors'

const Container = styled.label`
  position: relative;
`

const Label = styled.span`
  padding-left: 2px;
  display: block;
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 10px;
  color: ${primaryColor};
`

const Input = styled.input`
  width: 100%;
  min-height: 40px;
  border-radius: 3px;
  border: 1px solid ${borderColor};
  padding: 0 10px;
  font-size: 14px;

  &:hover {
    border-color: ${hoverBorderColor};
  }
`

export const StyledErrorText = styled.div`
  font-size: 12px;
  color: ${errorColor};
  position: absolute;
  bottom: -28px;
  padding-left: 2px;
`

interface IProps {
  label: string
  type?: 'text' | 'number'
  value: string
  className?: string
  min?: number
  error?: string | null
}

const TextInput: React.FC<IProps & React.HTMLAttributes<HTMLInputElement>> = ({
  label,
  value,
  onChange,
  className,
  type = 'text',
  error,
  ...rest
}) => {
  return (
    <div className={className}>
      <Container>
        <Label>{label}</Label>
        <Input
          type={type}
          pattern={type === 'number' ? '^(0|\\+?[1-9]\\d*)$' : undefined}
          value={value}
          onChange={onChange}
          {...rest}
        />
        {Boolean(error) && <StyledErrorText>{error}</StyledErrorText>}
      </Container>
    </div>
  )
}

export default TextInput

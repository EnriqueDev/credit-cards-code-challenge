import * as React from 'react'
import styled from 'styled-components'
import {
  primaryColor,
  borderColor,
  hoverBorderColor,
} from '../../../constants/colors'

const Label = styled.span`
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

interface IProps {
  label: string
  type?: 'text' | 'number'
  value: string
  className?: string
  min?: number
}

const TextInput: React.FC<IProps & React.HTMLAttributes<HTMLInputElement>> = ({
  label,
  value,
  onChange,
  className,
  type = 'text',
  ...rest
}) => {
  return (
    <div className={className}>
      <label>
        <Label>{label}</Label>
        <Input
          type={type}
          pattern={type === 'number' ? '^(0|\\+?[1-9]\\d*)$' : undefined}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </label>
    </div>
  )
}

export default TextInput

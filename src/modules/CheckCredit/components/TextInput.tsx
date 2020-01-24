import * as React from 'react'
import styled from 'styled-components'
import { borderColor, hoverBorderColor } from '../../../constants/colors'

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

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number'
  value: string
  className?: string
  min?: number
}

export const TextInput: React.FC<IProps> = ({
  value,
  onChange,
  type = 'text',
  ...rest
}) => {
  return (
    <Input
      type={type}
      pattern={type === 'number' ? '^(0|\\+?[1-9]\\d*)$' : undefined}
      value={value}
      onChange={onChange}
      {...rest}
    />
  )
}

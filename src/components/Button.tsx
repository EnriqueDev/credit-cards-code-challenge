import React, { FC, HTMLAttributes, HtmlHTMLAttributes } from 'react'
import styled from 'styled-components'
import { primaryColor } from '../constants/colors'

const StyledButton = styled.button`
  padding: 15px 20px;
  background-color: ${primaryColor};
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 13px;
  transition: transform 250ms;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: translateY(1px);
  }
`

const Button: FC<HTMLAttributes<HTMLButtonElement>> = props => {
  return <StyledButton {...props} />
}

export default Button

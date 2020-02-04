import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { primaryColor } from '../constants/colors'

const StyledButton = styled.button`
  position: relative;
  padding: 15px 20px;
  background-color: ${primaryColor};
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 13px;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.03);

    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }

  &:active {
    transform: translateY(1px);
  }
`

const Button: FC<HTMLAttributes<HTMLButtonElement>> = props => {
  return <StyledButton {...props} />
}

export default Button

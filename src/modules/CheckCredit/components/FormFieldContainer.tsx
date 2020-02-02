import React, { FC } from 'react'
import styled from 'styled-components'
import { primaryColor } from '../../../constants/colors'

const Container = styled.label`
  position: relative;
  display: block;
`

const Label = styled.span`
  padding-left: 2px;
  display: block;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 10px;
  color: ${primaryColor};
`

interface IProps {
  label: string
  className?: string
  error?: string | null
}

export const FormFieldContainer: FC<IProps> = ({
  label,
  className,
  children,
  error,
}) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      {children}
    </Container>
  )
}

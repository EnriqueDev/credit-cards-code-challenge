import React, { FC } from 'react'
import styled from 'styled-components'
import { primaryColor, errorColor } from '../../../constants/colors'

const Container = styled.label`
  position: relative;
  display: block;
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

export const StyledErrorText = styled.div`
  font-size: 12px;
  color: ${errorColor};
  position: absolute;
  bottom: -15px;
  padding-left: 2px;
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
      {Boolean(error) && <StyledErrorText>{error}</StyledErrorText>}
    </Container>
  )
}

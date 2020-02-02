import * as React from 'react'
import styled from 'styled-components'
import { errorColor } from '../../../constants/colors'

export const StyledErrorText = styled.div`
  font-size: 12px;
  color: ${errorColor};
  margin-top: 5px;
  padding-left: 2px;
`

interface IProps {
  error: string | null
}

const ErrorText: React.FC<IProps> = ({ error }) => {
  if (!error) {
    return null
  }

  return <StyledErrorText>{error}</StyledErrorText>
}

export { ErrorText }

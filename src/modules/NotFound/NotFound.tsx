import * as React from 'react'
import styled from 'styled-components'

const NotFoundContainer = styled.section`
  height: 100%;
  display: flex;
  flex: 1 0 100%;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <h2>Whooops!</h2>
      <h1>404 - Page doesn't exist</h1>
    </NotFoundContainer>
  )
}

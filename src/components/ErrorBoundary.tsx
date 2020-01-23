import * as React from 'react'
import styled from 'styled-components'

const ErrorBoundaryContainer = styled.section`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  justify-content: center;
`

interface IErrorBoundaryState {
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  renderDevelopmentErrorInfo(): React.ReactNode | null {
    const { error, errorInfo } = this.state
    const isDevelopment = process.env.NODE_ENV === 'development'

    const hasError = error !== null

    if (!isDevelopment || !hasError) {
      return null
    }

    return (
      <>
        {error !== null && <p>{error.message}</p>}
        {errorInfo !== null && <p>{errorInfo.componentStack}</p>}
      </>
    )
  }

  render() {
    const { error } = this.state

    if (error === null) {
      return this.props.children || null
    }

    return (
      <ErrorBoundaryContainer>
        <h1>Whoops! Something went wrong!</h1>
        <h2>Please refresh the page</h2>
        {this.renderDevelopmentErrorInfo()}
      </ErrorBoundaryContainer>
    )
  }
}

export default ErrorBoundary

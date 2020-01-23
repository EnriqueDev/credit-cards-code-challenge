import * as React from 'react'
import ErrorBoundary from '../ErrorBoundary'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const ThrowingComponent: React.FC<{ throws: boolean }> = ({ throws }) => {
  if (throws) {
    throw new Error('Error!')
  }

  return <div>Success!</div>
}

describe('ErrorBoundary', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn())
  })

  afterEach(() => {
    ;(console.error as any).mockRestore()
  })

  it('should mount if no component fails', () => {
    const { container } = render(
      <ErrorBoundary>
        <ThrowingComponent throws={false} />
      </ErrorBoundary>,
    )

    expect(container).toHaveTextContent('Success!')
  })

  it('should show fallback UI when a component throws', () => {
    const { container, rerender } = render(
      <ErrorBoundary>
        <ThrowingComponent throws={false} />
      </ErrorBoundary>,
    )

    rerender(
      <ErrorBoundary>
        <ThrowingComponent throws />
      </ErrorBoundary>,
    )
    expect(container).toHaveTextContent('Whoops! Something went wrong!')
  })
})

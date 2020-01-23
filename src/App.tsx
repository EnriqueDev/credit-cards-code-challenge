import * as React from 'react'
import { Router, Route } from 'react-router-dom'
import { browserHistory } from './router/browserHistory'
import CheckCredit from './modules/CheckCredit'
import { checkCredit } from './router/routes'
import NotFound from './modules/NotFound'
import { Reset } from './reset.css'
import ErrorBoundary from './components/ErrorBoundary'

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router history={browserHistory}>
        <Reset />
        <Route component={CheckCredit} exact path={checkCredit} />
        <Route component={NotFound} />
      </Router>
    </ErrorBoundary>
  )
}

export default App

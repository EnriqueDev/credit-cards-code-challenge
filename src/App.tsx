import * as React from 'react'
import { Router, Route } from 'react-router-dom'
import { browserHistory } from './router/browserHistory'
import CheckCredit from './modules/CheckCredit'
import { checkCredit } from './router/routes'

const App: React.FC = () => {
  return (
    <Router history={browserHistory}>
      <Route component={CheckCredit} exact path={checkCredit} />
    </Router>
  )
}

export default App

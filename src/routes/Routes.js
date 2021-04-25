import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'

import React from 'react'
import { createBrowserHistory } from 'history'
import Dashboard from '../pages/dashboard/dashboard'
import Page404 from '../pages/Page404'
import About from '../pages/about/about'

export const history = createBrowserHistory()
const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/about' component={About} />
        <Route exact path='/notfound' component={Page404} />
      </Switch>
    </Router>
  )
}
export default Routes

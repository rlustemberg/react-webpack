import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Archives from './pages/archives'
import Featured from './pages/featured'
import Layout from './pages/layout'
import Setting from './pages/setting'

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Featured}></IndexRoute>
          <Route path='archives(/:article)' name='archives' component={Archives}></Route>
          <Route path='settings' name='settings' component={Setting}></Route>
        </Route>
      </Router>
    )
  }
}

import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Layout from './pages/layout'

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          {/* <IndexRoute component={Layout}></IndexRoute> */}
          {/* <Route path='path(/:id)' name='name' component={name}></Route> */}
        </Route>
      </Router>
    )
  }
}

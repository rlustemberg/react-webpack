import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Layout from './pages/layout'
import Settings from './pages/settings'
import Favorites from './pages/favorites'
import Todos from './pages/todos'

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Todos}></IndexRoute>
          <Route path='favorites(/:favorite)' name='favorites' component={Favorites}></Route>
          <Route path='settings' name='settings' component={Settings}></Route>
        </Route>
      </Router>
    )
  }
}

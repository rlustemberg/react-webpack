'use strict'
require('./styles/style.styl')
import React from 'react'
import {render} from 'react-dom'
import 'react-router'
import {Provider} from 'react-redux'
import store from './components/store'

import App from './components/app'

render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('content'));

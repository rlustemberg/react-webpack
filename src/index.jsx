'use strict'
require('./styles/style.styl')
import React from 'react'
import {render} from 'react-dom'
import 'react-router'

import App from './components/app'

render(
    <App/>, document.getElementById('content'));

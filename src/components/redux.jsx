import {applyMiddleware, createStore} from 'redux'
import fetch from 'isomorphic-fetch'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":

      break;
    case "FETCH_USERS_ERROR":

      break;
    case "RECEIVE_USERS":

      break;
  }
  return state
}

const middleware = applyMiddleware(thunk, logger())
const store = createStore(reducer, middleware)

store.dispatch((dispatch) => {
  dispatch({type: 'FETCH_USERS_START'})
  fetch('api/users').then((response) => {
    console.log(response)
    dispatch({type: 'RECEIVE_USERS', payload: response.data})
  }).catch((err) => {
    dispatch({type: 'FETCH_USERS_ERROR', payload: err})
  })
  // do something async

})

export default store

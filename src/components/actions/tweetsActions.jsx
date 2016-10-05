import fetch from 'isomorphic-fetch';

export function fetchTweets() {
  return (dispatch) => {
    fetch('api/tweets').then((response) => {
      return response.json()
    }).then((response) => {
      dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
    }).catch((err) => {
      dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
    })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text
    }
  }
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text
    }
  }
}

export function deleteTweet(id) {
  return {type: 'DELETE_TWEET', payload: id}
}

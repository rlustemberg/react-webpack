import React from 'react'
import Footer from '../layout/footer'
import Nav from '../layout/nav'
import {connect} from 'react-redux'

import * as UserActions from '../actions/userActions'
import * as TweetsActions from '../actions/tweetsActions'

@connect((store) => {
  return {user: store.user.user, userFetched: false, tweets: store.tweets.tweets}
})
export default class Layout extends React.Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.dispatch(UserActions.fetchUser())
  }

  fetchTweets() {
    this.props.dispatch(TweetsActions.fetchTweets())
  }

  render() {
    console.log(this.props)
    const {location, user, tweets} = this.props;
    let buttonTweets = ''
    console.log(tweets)
    if (!tweets.length)
      buttonTweets = <button onClick={this.fetchTweets.bind(this)}>Load Tweets</button>
    const mappedTweets = tweets.map((tweet) => <li key={tweet.id}>{tweet.text}</li>)
    return (
      <div>
        <Nav location={location}/>
        <div class="container">
          <div class="row">
            <div className="col-sm-12">
              {buttonTweets}
              <h1>{user.name}</h1>
              <ul>{mappedTweets}</ul>
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

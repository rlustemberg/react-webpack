import React from 'react'
import CommentBox from './comment-box'

export default class App extends React.Component {
    render() {
        return (<CommentBox url="/api/comments" pollInterval={2000}/>)
    }
}

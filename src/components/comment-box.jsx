import React from 'react'
import CommentList from './comment-list'
import CommentForm from './comment-form'
import fetch from 'isomorphic-fetch'

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this)
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
        this.state = {
            data: []
        }
    }
    loadCommentsFromServer() {
        fetch(this.props.url).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({data: data})
        })
    }
    handleCommentSubmit(comment) {
        let comments = this.state.data;
        comment.id = Date.now();
        let newComments = comments.concat([comment]);
        this.setState({data: newComments});
        fetch(this.props.url, {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(comment)
        }).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({data: data})
        }).catch(() => {
            console.log('error')
            this.setState({data: commets})
        })
    }
    componentDidMount() {
        this.loadCommentsFromServer()
        setInterval(this.loadCommentsFromServer, this.props.pollInterval)
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        )
    }
}

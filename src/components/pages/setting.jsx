import React from 'react'

export default class Featured extends React.Component {
    constructor() {
        super()
        this.state = {
            title: 'Setting'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}

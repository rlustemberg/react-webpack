import React from 'react'

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    const title = this.props.title
    return (
      <div class="mdl-cell mdl-cell--3-col">
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="#" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">More Info</a>
      </div>
    )
  }
}

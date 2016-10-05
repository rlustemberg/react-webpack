import React from 'react'
import {Link, IndexLink} from 'react-router'

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: false
    }
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed
    this.setState({collapsed})
  }

  render() {
    const {location} = this.props
    const {collapsed} = this.state
    const indexClass = location.pathname === "/"
      ? "active"
      : ""
    const navClass = collapsed
      ? "collapse"
      : ""

    return (
      <nav class="navbar navbar-fixed-top navbar-default" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="navbar-collapse">
            <ul class="nav navbar-nav">
              <li class={indexClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Index</IndexLink>
              </li>
              {/* <li class={nameClass}>
                <Link to="name" onClick={this.toggleCollapse.bind(this)}>Name</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

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
    const todoClass = location.pathname === "/"? "active": ""
    const favoritesClass = location.pathname.match('favorites')? "active": ""
    const settingsClass = location.pathname.match('settings')? "active": ""
    const navClass = collapsed? "collapse": ""

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
              <li class={todoClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Todos</IndexLink>
              </li>
              <li class={favoritesClass}>
                <Link to="favorites" onClick={this.toggleCollapse.bind(this)}>Favorites</Link>
              </li>
              <li class={settingsClass}>
                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

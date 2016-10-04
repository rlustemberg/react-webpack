import React from 'react'
import {Link} from 'react-router'

export default class Nav extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header has-drawer is-upgraded">
        <div class="mdl-layout__header mdl-layout__header--waterfall">
          <div class="mdl-layout__drawer-button">
            <i class="material-icons"></i>
          </div>
          <div class="mdl-layout__header-row">
            <nav class="mdl-navigation react-webpack-navigation">
              <Link class="mdl-navigation__link mdl-typography--text-uppercase" to="/">Featured</Link>
              <Link class="mdl-navigation__link mdl-typography--text-uppercase" to="archives">Archives</Link>
              <Link class="mdl-navigation__link mdl-typography--text-uppercase" to="settings">Settings</Link>
            </nav>
          </div>
        </div>
        <div class="mdl-layout__drawer">
          <nav class="mdl-navigation">
            <Link class="mdl-navigation__link mdl-typography--text-uppercase" to="/">Featured</Link>
            <Link class="mdl-navigation__link mdl-typography--text-uppercase" to="archives">Archives</Link>
            <Link class="mdl-navigation__link mdl-typography--text-uppercase" to="settings">Settings</Link>
          </nav>
        </div>
      </div>
    )
  }
}

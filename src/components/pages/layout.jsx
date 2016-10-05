import React from 'react'
import Footer from '../layout/footer'
import Nav from '../layout/nav'

export default class Layout extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {location} = this.props;
    return (
      <div>
        <Nav location={location}/>
        <div class="container">
          <div class="row">
            <div className="col-sm-12">
              <h1>Layout</h1>
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

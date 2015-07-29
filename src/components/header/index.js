import './index.css'
import React, { Component } from 'react'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className='header'>
        {this.props.title}
      </header>
     )
  }
}

Header.defaultProps = {
  title: 'Header'
}

export default Header

import React, { Component } from 'react'
import Header from 'components/header'

class Layout extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='layout'>
        <div className='page'>
          <Header/>
          <section className='content'>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </section>
        </div>
        <nav className='nav'>
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button>D</button>
        </nav>
      </section>
    )
  }

}

export default Layout

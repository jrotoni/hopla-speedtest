import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header>
        <span className="logo-name">Hopla</span>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Network</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </header>
    )
  }
}

export default Header

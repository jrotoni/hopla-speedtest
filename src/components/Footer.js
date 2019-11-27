import React, { Component } from 'react'
import Home from '../svg/clock.svg'
import Logs from '../svg/carreer.svg'
import Settings from '../svg/technical-support.svg'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-menu">
          <div className="icon active">
            <img src={Home} className="home" alt="home" />
          </div>
          <div className="icon">
            <img src={Logs} className="logs" alt="logs" />
          </div>
          <div className="icon">
            <img src={Settings} className="settings" alt="settings" />
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

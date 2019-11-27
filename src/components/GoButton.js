import React, { Component } from 'react'

export class GoButton extends Component {

  render() {
    return (
      <div className="main-container">
        <button id="goBtn" onClick={this.props.showResult}><span>Go</span></button>
      </div>
    )
  }
}

export default GoButton

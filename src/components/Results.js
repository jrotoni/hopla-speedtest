import React, { Component } from 'react'
import Good from '../svg/check.svg'

export class Results extends Component {
  render() {
    return (
      <div className="results">
        <div className="result-container">
          <div className="rating result-div">
            <img src={Good} alt="good" className="good" />
            <span className="label small">Rating</span>
            <span className="result small">Good</span>
          </div>
          <div className="figures result-div">
            <div className="speed">
              <span className="label big">Download</span>
              <span className="result big">40.2 MB</span>
            </div>
            <div className="speed">
              <span className="label big">Upload</span>
              <span className="result big">5.5 MB</span>
            </div>
            <div className="otherInfo">
              <div className="info">
                <span className="label small">Location</span>
                <span className="result small">BR - GIG</span>
              </div>
              <div className="info">
                <span className="label small">Ping</span>
                <span className="result small">30 MS</span>
              </div>
              <div className="info">
                <span className="label small">Jitter</span>
                <span className="result small">4 MS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="test-again" onClick={this.props.showResult}><span>Test Again</span></button>
        </div>
      </div>
    )
  }
}

export default Results

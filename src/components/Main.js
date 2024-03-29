import React, { Component } from 'react'
import GoButton from './GoButton'
import Results from './Results'

export class Main extends Component {

  state = {
    data: {},
    isResult: false
  }

  showResult = () => {
    this.setState({ isResult: !this.state.isResult })
  }

  render() {
    return (
      <main>
        {this.state.isResult ? <Results showResult={this.showResult} /> : <GoButton showResult={this.showResult} />}
      </main>
    )
  }
}

export default Main

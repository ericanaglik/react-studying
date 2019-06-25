// default import { other imports }
import React, { Component } from 'react'
// Class component 
class Study extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '', 
      input2: '',
      message: 'input password',
      count: 0
    }
  }
  // Must call setState to change state!
  myMethod() {
    this.setState({ count: this.state.count + 1 })
    // this.state.count += 1 // BAD!
    if (this.state.input === this.state.input2) {
      this.setState({ message: 'Passwords match yay!' })
    } else {
      this.setState({ message: 'Passwords dont match' })
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.input}</h1>
        <h2>Count: {this.state.count}</h2>
        <h3>{this.state.message}</h3>

        <input 
          type="password"
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
        />

        <input 
          type="password"
          value={this.state.input2}
          onChange={(e) => this.setState({ input2: e.target.value })}
        />

        <button onClick={(e) => this.myMethod()}>Submit!</button>
      </div>
    )
  }
}

export default Study
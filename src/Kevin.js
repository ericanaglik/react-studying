import React, { Component } from 'react'
//class based component
class Kevin extends Component {
    constructor(props) {
        // subclass of a component
        super(props)
        // variables that we manipulate in the state
        this.state = {
            numBarks: 0,
            name: '',

        }
    }
    // Method 
    createBark() {
        // increasing the number of barks 
        this.setState({ numBarks: this.state.numBarks + 1 })
    }

    render(){
        return(
            <div>
                <h1>Woof</h1>
                <h2>{this.state.numBarks}</h2>
                {/*e is an event parameter. redirects to createBark class method above */}
                <button onClick={(e) => this.createBark()}>Bark</button>
                <h1>Dog's name?</h1>
                {/* creating a method in one line. sets the state by creating an input form that saves text to the state  */}
                <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                {/* display the saved text */}
                <h2>{this.state.name}</h2>
                
            </div>
        )
    }
}

export default Kevin

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

function Button(props) {
  return <button className="Button" onClick={props.onClick}> {props.buttonName} </button>
}

function ButtonStatus(props) {
  return <footer> Button clicked {props.n} times </footer>
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clicks: 0
    }
  }

  buttonClicked = () => {
    const n = this.state.clicks
    this.setState({
      clicks: n + 1
    })
    if (this.state.clicks === 10) {alert("Ricky is a cunt.")}
  }

  reset = () => {
    this.setState({
      clicks: 0
    })
  }

  render() {
    return (
      <div className="App">
        <img className="App-logo" src={logo} alt="React Logo"/>
        <Welcome name="Mike" />
        <Button buttonName="Click me!" onClick={this.buttonClicked} />
        <Button buttonName="Reset" onClick={this.reset} />
        <ButtonStatus n={this.state.clicks} />
      </div>
      
    )
  }

}


export default App;

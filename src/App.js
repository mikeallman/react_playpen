import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const name = "Mike Allman"
const email = "mike@allman.io"
const github = "https://github.com/mikeallman/react_playpen"

function Welcome(props) {
  return <div className="Welcome">{props.name} is learning react!</div>;
}

function Button(props) {
  return <button className="Button" onClick={props.onClick}> {props.buttonName} </button>
}

function ButtonStatus(props) {
  return <div className="ButtonStatus"> Button clicked {props.n} times </div>
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
  }

  reset = () => {
    this.setState({
      clicks: 0
    })
  }

  render() {
    return (
      <div className="App">
        
        <header>
          <a className="FooterAnchor" href="./">HOME</a>
        </header>
      

        <div className="MainContent">
        
          <div>
            <img className="App-logo" src={logo} alt="React Logo"/>
          </div>
        
          <Welcome name="Mike" />
          <Button buttonName="Click me!" onClick={this.buttonClicked} />
          <Button buttonName="Reset" onClick={this.reset} />
          <ButtonStatus n={this.state.clicks} />
        
        </div>
        
        <footer>

          <a className="FooterAnchor" href={`mailto:${email}`}>
            Hacked up by {name}
          </a>
          
          <a className="FooterAnchor" href={github} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>

        </footer>
        
      </div>
    )
  }

}

export default App;

import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import logo from '../logo.svg';
import '../styles/App.css';

class PokeDex extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RaisedButton>Some Button</RaisedButton>
      </div>
    );
  }
}

export default PokeDex;

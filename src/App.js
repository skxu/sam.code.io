import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="/pineapple.svg" className="App-logo" alt="logo" />
          <h2>Sam Xu</h2>
          <NavBar />
        </div>
        <div className="App-intro">
          { this.props.children }
        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Button from './components/Button';
import Response from './components/Response';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />
        <Response />
      </div>
    );
  }
}

export default App;

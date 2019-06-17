import React, { Component } from 'react';
import logo from './logo.svg';
import AppRoutes from './route';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
      <AppRoutes />

        </header>
      </div>
    );
  }
}

export default App;

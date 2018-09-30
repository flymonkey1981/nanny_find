import React, { Component } from 'react';
import './App.css';
import routerApp from './router/router'

class App extends Component {
  render() {
    return (
        routerApp()
    );
  }
}

export default App;

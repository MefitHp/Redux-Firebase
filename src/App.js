import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;

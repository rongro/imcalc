import React, { Component } from 'react';
import './App.css';
import IMCalc from './components/IMCalc';

class App extends Component {
  render() {
    return (
      <div className="app">
        <IMCalc />                  
      </div>
    );
  }
}

export default App;

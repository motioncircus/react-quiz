import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Enneagram Online Quiz</h2>
        </div>
        <p className="App-intro">
          <Question content="What is your favourite food?" />
        </p>
      </div>
    );
  }
}

export default App;

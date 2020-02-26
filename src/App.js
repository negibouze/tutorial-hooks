import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Board />
      </header>
    </div>
  );
}

export default App;

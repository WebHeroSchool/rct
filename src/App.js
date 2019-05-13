import React from 'react';
import logo from './logo.svg';
import './App.css';
import count from './numbers.js';
import { length } from './numbers.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p style={{
          display: 'grid', 
          gridTemplateColumns: 'max-content' 
        }}>
          <span>Edit <code>src/App.js</code> and save to reload.<br></br></span>
          <div style={{
            border: '5px solid red',
            padding: '5px 10px',
            marginTop: '30px',
            marginRight: 'auto',
            marginLeft: 'auto'
          }}>
          Общая длина: {count * length}
          </div>
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

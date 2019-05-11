import React from 'react';
import logo from './logo.svg';
import './App.css';

const num = 13;
let isNigel = true;
let isNigelHappy = false;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'red',
          fontStyle: 'italic'
        }}>Liquid is liquid. Liquid.</h1>
        <p style={{
          width: 100 + 400
        }}>
          Edit <code>src/App.js</code> and save to reload.<br></br>
          My favorite number is {num}.<br></br> 
          We're only making plans for Nigel {777}
          We're only want what's best for him {7 + 6}
          We're only making plans for {isNigel && 'Nigel'}
          Nigel just needs this helping hand.
          And when young Nigel says he's happy,
          He must be happy, he must be {isNigelHappy ? 'unhappy': 'happy'}
          In his work!<br></br>
          Yo, man, check this out! I have an invisible ink: 
          {undefined}
          {null}
          {false}
          {true}

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

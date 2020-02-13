import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <button onClick={sendToNative}>
          Send to native
        </button>
       
      </header>
    </div>
  );
}

function sendToNative() {
  window.webkit.messageHandlers.setLabelText.postMessage("This is from the webpage");
}

export default App;

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
  console.log("callback try")
  window.webkit.messageHandlers.callback.postMessage("This is from the webpage");
}

export default App;

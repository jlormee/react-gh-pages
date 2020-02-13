import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'Native have not call any of me'
    }
  }

  componentDidMount(){
    console.log("Component did mount")
    window.app = this;
  }

  sendToNative = () => {
    console.log("Sending message to native")
    try {
      window.webkit.messageHandlers.callback.postMessage("This is from the webpage");
    } catch(err) {
      console.error(err)
    }
  }

  funcForNativeToCall = () => {
     this.setState({
         data: "Native called me :-)",
     })
  };

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world!??
          </p>
          <p>{this.state.data}</p>
          <button onClick={this.sendToNative}>
            Send to native
          </button>
        </header>
      </div>
    )
  }
}

export default App;
/*
class App extends Component {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!?
        </p>
        <button onClick={sendToNative}>
          Send to native
        </button>
       
      </header>
    </div>
  );
}

function sendToNative() {
  window.webkit.messageHandlers.callback.postMessage("This is from the webpage");
}

export default App;
*/

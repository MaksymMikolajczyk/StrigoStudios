import React, { Component } from 'react';
import './App.css';

import LoginBox from './components/LoginBox/LoginBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginBox/>
      </div>
    );
  }
}

export default App;

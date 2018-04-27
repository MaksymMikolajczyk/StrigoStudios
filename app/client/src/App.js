import React, { Component } from 'react';
import './App.css';

import LandingPage from 'LandingPage/LandingPage'
import LoginBox from 'components/LoginBox/LoginBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>

      </div>
    );
  }
}

export default App;

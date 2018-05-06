import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';

import LandingPage from 'LandingPage/LandingPage'
import LoginBox from 'components/LoginBox/LoginBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={LandingPage} />
        <Route path="/auth" exact component={LoginBox}/>
      </div>
    );
  }
}

export default App;

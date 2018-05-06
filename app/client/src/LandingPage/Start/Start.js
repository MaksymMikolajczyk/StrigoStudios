import React from 'react'

import Parallax from 'LandingPage/Parallax/Parallax'

import './Start.css'
import logo from 'res/logo.svg'


const start = (props) => {
  return (

    <div className="Start-wrapper">
      <Parallax image="Background-Start"/>
      <div className="Start-banner">
        <img className="Start-logo" src={logo} alt="Logo"/>
        <h1 className="Start-h1">Strigo Studios</h1>
        <button onClick={props.click}>Logowanie</button>
        <div className="Start-ScrollIndicator">
          <span className="Start-ScrollIndicator-Wheel"></span>
        </div>
      </div>


    </div>

  )
}

export default start;

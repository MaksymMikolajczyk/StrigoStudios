import React from 'react'
import { Parallax, Background } from 'react-parallax';

import './Start.css'
import logo from 'res/logo.svg'
import banner from 'res/banner.jpg'

const start = (props) => {
  return (
    <div className="Start-wrapper">
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={banner}
      bgImageAlt="Banner"
      strength={200}
    >
      <div className="Start-banner">
        <img className="Start-logo" src={logo} alt="Logo"/>
        <h1 className="Start-h1">Strigo Studios</h1>
      </div>
    </Parallax>

</div>

  )
}

export default start;

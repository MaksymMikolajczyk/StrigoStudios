import React from 'react'
import {FaIconPack} from 'react-icons/lib/fa'

import './Service.css'

const service = (props) => {
  let className = 'Service ';
  if(props.playAnim){
    className += 'Service-Show'
  }
  return (
    <div className={className} style={{transitionDelay: props.transitionDelay}}>
      {props.icon}
      <p className='Service-title'>{props.title}</p>
      <p className='Service-text'>{props.text}</p>
    </div>
  )
}

export default service;

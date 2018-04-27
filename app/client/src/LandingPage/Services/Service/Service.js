import React from 'react'
import {FaIconPack} from 'react-icons/lib/fa'

import './Service.css'

const service = (props) => {
  return (
    <div className='Service'>
      {props.icon}
      <p className='Service-title'>{props.title}</p>
      <p className='Service-text'>{props.text}</p>
    </div>
  )
}

export default service;

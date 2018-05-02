import React from 'react'

import './Project.css'

const project = (props) => {
  let className = "Project "+ props.color;
  if(props.playAnim){
    className += ' Project-Show'
  }
  return (
    <div className={className} style={{transitionDelay: props.transitionDelay}}>
      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <img className={props.imageAngle} src={props.imageSrc} alt={props.imageAlt}/>
    </div>
  )
}

export default project;

import React from 'react'

import './Project.css'

const project = (props) => {
  return (
    <div className={"Project "+ props.color}>
      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <img className={props.imageAngle} src={props.imageSrc} alt={props.imageAlt}/>
    </div>
  )
}

export default project;

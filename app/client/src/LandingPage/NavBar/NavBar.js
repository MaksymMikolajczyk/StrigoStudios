import React from 'react'


import './NavBar.css'

const navBar = (props) => {
  return (
    <div className="NavBar">
      <a onClick={()=>props.disabled ? null : props.click('Start')}>Start</a>
      <a onClick={()=>props.disabled ? null : props.click('Services')}>Oferta</a>
      <a onClick={()=>props.disabled ? null : props.click('Projects')}>Projekty</a>
      <a onClick={()=>props.disabled ? null : props.click('Contact')}>Kontakt</a>
      <a className="NavBar-a-login" href=''>Logowanie</a>
    </div>
  )
}

export default navBar;

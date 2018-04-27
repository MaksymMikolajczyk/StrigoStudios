import React from 'react'


import './NavBar.css'

const navBar = (props) => {
  return (
    <div className="NavBar">
      <a href=''>Start</a>
      <a href=''>Oferta</a>
      <a href=''>Projekty</a>
      <a href=''>Kontakt</a>
      <a className="NavBar-a-login" href=''>Logowanie</a>
    </div>
  )
}

export default navBar;

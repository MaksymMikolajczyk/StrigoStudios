import React from 'react'

import Project from './Project/Project'
import Parallax from 'LandingPage/Parallax/Parallax'

import BreastIdea from 'res/BreastIdea.jpg'
import OptiCalc from 'res/OptiCalc.jpg'

import './Projects.css'

const projects = (props) => {
  return (


      <div className="Projects">
        <Parallax image="Background-Projects"/>
        <h1>Nasze flagowe produkty</h1>
        <Project
          color="dark"
          title="Breast Idea"
          text="Zintegorwany system parametrycznej oceny piersi."
          imageAngle="end"
          imageSrc={BreastIdea}
          imageAlt="BI"
          />
        <Project
          color="light"
          title="Opti Calc"
          text="Zestaw narzędzi dla okulistów."
          imageAngle="start"
          imageSrc={OptiCalc}
          imageAlt="OC"
          />
      </div>





  )
}

export default projects;

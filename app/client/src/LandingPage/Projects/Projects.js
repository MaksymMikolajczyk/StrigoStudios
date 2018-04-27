import React from 'react'
import { Parallax, Background } from 'react-parallax';

import Project from './Project/Project'

import BreastIdea from 'res/BreastIdea.jpg'
import OptiCalc from 'res/OptiCalc.jpg'

import banner from 'res/banner_2.jpg'
import './Projects.css'

const projects = (props) => {
  return (

    <Parallax
      blur={{ min: 15, max: -15 }}
      bgImage={banner}
      bgImageAlt="Banner"
      strength={200}
    >
      <div className="Projects">
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
    </Parallax>




  )
}

export default projects;

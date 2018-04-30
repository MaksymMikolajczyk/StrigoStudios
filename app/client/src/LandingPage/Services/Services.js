import React from 'react'
import {FaMedkit, FaMobile, FaCut, FaCogs, FaEdit, FaFortAwesome} from 'react-icons/lib/fa'

import Service from './Service/Service'

import './Services.css'

const services = (props) => {

  return (
    <div className="Services-wrapper">
      <h2>Nasza oferta</h2>
      <Service
        title="Informatyzacja medycyny"
        text="Tworzymy dedykowane rozwiązania pomocne przy procesie diagnostycznym i leczniczym."
        icon={<FaMedkit className="Service-icon"/>}/>
      <Service
        title="Aplikacje mobilne i webowe"
        text=""
        icon={<FaMobile className="Service-icon"/>}/>
      <Service
        title="Szyte na miarę rozwiązania"
        text="Każdy projekt jest wyjątkowy. Dlatego zawsze podchodzimy do nich indywidualnie, by jak najlepiej zadowolić Klienta."
        icon={<FaCut className="Service-icon"/>}/>
      <Service
        title="Uczenie maszynowe"
        text="Już wkrótce..."
        icon={<FaCogs className="Service-icon"/>}/>
      <Service
        title="Projektowanie, skanowanie, wydruk 3D"
        text="Usługa szybkiego tworzenia prototypu urządzenia z szerokiej gamy materiałów. Wysokiej jakości laserowe skany umożliwiają dokładną replikację obiektu."
        icon={<FaEdit className="Service-icon"/>}/>
      <Service
        title="Projekty po godzinach"
        text="Gry planszowe i fabularne to nasza pasja. Mamy wiele mniejszych projektów usprawniajacych i wspomagających to doświadczenie."
        icon={<FaFortAwesome className="Service-icon"/>}/>
    </div>

  )
}

export default services;

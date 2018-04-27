import React from 'react'
import {FaFacebook, FaYoutubePlay, FaLinkedin, FaTwitter, FaGooglePlus} from 'react-icons/lib/fa'
import './Contact.css'


class Contact extends React.Component {
  render () {
   return(
     <div className="Contact">
       <h1>Skontaktuj się z nami!</h1>
       <form>

       </form>
       <div className="Contact-social-media">
         <FaFacebook className="Contact-icon" />
         <FaYoutubePlay className="Contact-icon"/>
         <FaLinkedin className="Contact-icon"/>
         <FaTwitter className="Contact-icon"/>
         <FaGooglePlus className="Contact-icon"/>
       </div>
     </div>
   )
  }
}

export default Contact;

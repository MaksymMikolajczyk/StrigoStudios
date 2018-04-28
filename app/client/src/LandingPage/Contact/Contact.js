import React from 'react'
import Formsy from 'formsy-react';
import axios from 'axios';
import {FaFacebook, FaYoutubePlay, FaLinkedin, FaTwitter, FaGooglePlus} from 'react-icons/lib/fa'

import Input from 'LandingPage/UI/Input/Input'

import './Contact.css'


class Contact extends React.Component {

state={
  canSubmit: false,
  emailResult: '',
  resultStyle: 'Fail'
}



disableButton = () => {
  this.setState({ canSubmit: false });
}

enableButton = () => {
  this.setState({ canSubmit: true });
}

submit = (model) => {
  // fetch('http://example.com/', {
  //   method: 'post',
  //   body: JSON.stringify(model)
  // });
  axios.post('/api/email', {
      email: model.email,
      signature: model.signature,
      message: model.message
    })
    .then( (response) => {
      this.setState({emailResult: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe!", resultStyle: "Success"})
      this.refs.form.reset();
    })
    .catch( (error) =>  {
      this.setState({emailResult: "Wysyłanie wiadomości nie powiodło się!", resultStyle: 'Fail'})
    });

  console.log(model)



}



  render () {
   return(
     <div className="Contact">
       <h1>Skontaktuj się z nami!</h1>
       <Formsy ref="form" className="Form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
               <Input
                 inputType="email"
                 placeholder="Adres email"
                 name="email"
                 validations="isEmail"
                 validationError="Nieprawidłowy adres email"
                 required
               />
               <Input
                 inputType="text"
                 placeholder="Podpis"
                 name="signature"
                 required
               />
             <Input
               inputType="textarea"
               placeholder="Wiadomość..."
               name="message"
               required
               />
             <button type="submit" disabled={!this.state.canSubmit}>Wyślij</button>
         </Formsy>
         <div className={"EmailResult "+ this.state.resultStyle}>
           <p>{this.state.emailResult}</p>
         </div>
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

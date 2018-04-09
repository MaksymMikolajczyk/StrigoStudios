import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../logo.svg'
import './LoginBox.css'

class loginBox extends React.Component {
  state={
    loggingIn:true
  }
  toggleLoginRegister = ()=>{
    this.setState(prevState=>{
      return{
        loggingIn: !prevState.loggingIn
      }
    })
  }

  render() {
    const register = ( <div class = "LoginBox" >
    <img src = {logo} class = "LoginBox-logo" alt = "logo" />
      <h1 class = "LoginBox-title" > Strigo Studios </h1>
      <input type="email" name="email" placeholder="Email" required=""/>

        <input type="text" name="login" placeholder="Login" required=""/>
          <input type="password" name="password" placeholder="Hasło" required=""/>
            <button>Stwórz konto</button >
              <p onClick={this.toggleLoginRegister}> Masz już konto? Zaloguj się ... </p>
            </div> )
    const login = (
      <div class="LoginBox">
        <img src={logo} class="LoginBox-logo" alt="logo"/>
          <h1 class="LoginBox-title">Strigo Studios</h1>
          <input type="text" name="login" placeholder="Login" required=""/>
            <input type="password" name="password" placeholder="Hasło" required=""/>
              <button>Zaloguj</button>
              <p onClick={this.toggleLoginRegister}>Nie masz konta? Zarejestruj się...</p>
            </div>
    )

    return (
      <React.Fragment>{this.state.loggingIn ? login:register}</React.Fragment>

    )

  }
}

export default loginBox;

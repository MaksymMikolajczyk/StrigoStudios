import React from 'react'
import scrollToComponent from 'react-scroll-to-component';

import NavBar from './NavBar/NavBar'
import Start from './Start/Start'
import Services from './Services/Services'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

import './LandingPage.css'

class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.Start = React.createRef();
    this.Services = React.createRef();
    this.Projects = React.createRef();
    this.Contact = React.createRef();
  }

  state = {
    latestScrollPosition: 0,
    showNavBar: false
  }



  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll)
  // }
  // componentWillUnmount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  //
  // handleScroll = (event) => {
  //   var delta = this.state.latestScrollPosition - window.scrollY;
  //
  //   if(delta < -10){
  //     scrollToComponent(this.Services.current)
  //     this.setState({showNavBar:false})
  //   }else if (delta > 10){
  //     scrollToComponent(this.Start.current)
  //     this.setState({showNavBar:true})
  //   }
  //   this.setState({latestScrollPosition: window.scrollY})
  //
  // }

  render () {
    const navBar =  this.state.showNavBar ? <NavBar/>:null
    return(
      <div className="LandingPage">
        {navBar}
        <div ref={this.Start}>
          <Start/>
        </div>

        <div ref={this.Services}>
          <Services />
        </div>

        <div ref={this.Projects}>
          <Projects />
        </div>

        <div ref={this.Contact}>
          <Contact />
        </div>

      </div>
    )
  }
}

export default LandingPage;

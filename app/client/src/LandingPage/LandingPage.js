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
    currentRef: 'Start',
    showNavBar: false
  }



  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    var delta = this.state.latestScrollPosition - window.scrollY;


        if(delta < -10){
          switch (this.state.currentRef) {
            case 'Start':
              scrollToComponent(this.Services.current)
              setTimeout(()=>this.setState({currentRef: 'Services'}), 500)

              break;
            case 'Services':
              scrollToComponent(this.Projects.current)
              setTimeout(()=>this.setState({currentRef: 'Projects'}), 500)

              break;
            case 'Projects':
              scrollToComponent(this.Contact.current)
              setTimeout(()=>this.setState({currentRef: 'Contact'}), 500)

              break;
            default:
              break;
          }

          //this.setState({showNavBar:false})
        }else if (delta > 10){
          switch (this.state.currentRef) {
            case 'Contact':
              scrollToComponent(this.Projects.current)
              setTimeout(()=>this.setState({currentRef: 'Projects'}), 500)
              break;
            case 'Projects':
              scrollToComponent(this.Services.current)
              setTimeout(()=>this.setState({currentRef: 'Services'}), 500)
              break;
            case 'Services':
              scrollToComponent(this.Start.current)
              setTimeout(()=>this.setState({currentRef: 'Start'}), 500)

              break;
            default:
              break;
          }

          //this.setState({showNavBar:true})
        }
        this.setState({latestScrollPosition: window.scrollY})
    this.setState({latestScrollPosition: window.scrollY})

  }

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

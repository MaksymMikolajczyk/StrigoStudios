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
    showNavBar: true,
    seenServices: false,
    seenProjects: false
  }



  componentDidMount() {
    if(window.innerWidth >= 910){
      window.addEventListener('scroll', this.handleScroll)
    }


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
              if(!this.state.seenServices){
                this.setState({seenServices: true})
              }
              setTimeout(()=>this.setState({currentRef: 'Services'}), 700)

              break;
            case 'Services':
              scrollToComponent(this.Projects.current)
              if(!this.state.seenProjects){
                this.setState({seenProjects: true})
              }
              setTimeout(()=>this.setState({currentRef: 'Projects'}), 700)

              break;
            case 'Projects':
              scrollToComponent(this.Contact.current)
              setTimeout(()=>this.setState({currentRef: 'Contact'}), 700)

              break;
            default:
              break;
          }

          //this.setState({showNavBar:false})
        }else if (delta > 10){
          switch (this.state.currentRef) {
            case 'Contact':
              scrollToComponent(this.Projects.current)
              setTimeout(()=>this.setState({currentRef: 'Projects'}), 700)
              break;
            case 'Projects':
              scrollToComponent(this.Services.current)
              setTimeout(()=>this.setState({currentRef: 'Services'}), 700)
              break;
            case 'Services':
              scrollToComponent(this.Start.current, { align: 'top'})
              setTimeout(()=>this.setState({currentRef: 'Start'}), 700)

              break;
            default:
              break;
          }

          //this.setState({showNavBar:true})
        }
        this.setState({latestScrollPosition: window.scrollY})



  }
  handleLoginClick = () => {
    this.props.history.push('/auth')
  }

  render () {
    const navBar =  this.state.showNavBar ? <NavBar/>:null
    return(
      <div className="LandingPage">

        <div ref={this.Start}>
          <Start click={this.handleLoginClick}/>
        </div>

        <div ref={this.Services}>
          <Services playAnim={this.state.seenServices} />
        </div>

        <div ref={this.Projects}>
          <Projects playAnim={this.state.seenProjects}/>
        </div>

        <div ref={this.Contact}>
          <Contact />
        </div>

      </div>
    )
  }
}

export default LandingPage;

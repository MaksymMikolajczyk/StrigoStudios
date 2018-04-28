import React from 'react'

import Blur from './Blur'
import './Parallax.css'

class Parallax extends React.Component {
  constructor(props){
    super(props)
    this.Parallax = React.createRef();
  }
  state={
    blur: '0px'
  }


    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
      //console.log(this.Parallax.current.getBoundingClientRect().top)

      let blur = Math.abs(this.Parallax.current.getBoundingClientRect().top / 100)
      if(blur >= 0 && blur <= 10){
        blur = blur+'px'
        //console.log(blur)

        this.setState({blur: blur})
      }

    }

  render () {


    return(

        <Blur radius={this.state.blur}>
          <div ref={this.Parallax}
            className={"Parallax "+this.props.image}
            >

          </div>
        </Blur>

    )
  }
}

export default Parallax;

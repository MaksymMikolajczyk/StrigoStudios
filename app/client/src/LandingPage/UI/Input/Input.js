import React from 'react'
import { withFormsy } from 'formsy-react';

import FileInput from './FileInput/FileInput'

import './Input.css'

class Input extends React.Component {

  state = {
    errorMessage: null
  }

  handleErrorDisplay = ()=>{
    if(this.props.showError()){
      this.setState({errorMessage: this.props.getErrorMessage()})
    }
  }


  changeValue = (event) => {

  this.props.setValue(event.currentTarget.value);
  if(this.state.errorMessage !== '' && this.props.showError()){
    this.setState({errorMessage: null})
  }

  // if(this.props.inputType === 'file'){
  //   if(event.currentTarget.files[0]){
  //     if(event.currentTarget.files[0].size > 5242880){
  //        this.setState({errorMessage: "Za duży plik"})
  //        this.props.setValue(false)
  //     }else{
  //       this.setState({errorMessage: ""})
  //       this.props.setValue(true)
  //     }
  //
  //   }else{
  //     this.setState({errorMessage: ""})
  //     this.props.setValue(true)
  //   }
  //
  // }
}

  render () {

    let errorClass = this.state.errorMessage? 'Error':'';

    let input = (
            <input
              className={'Input '+ this.props.inputType + " " + errorClass}
              type={this.props.inputType}
              placeholder={this.props.placeholder}
              onChange={this.changeValue}
              value={this.props.getValue() || ''}
              onBlur={this.handleErrorDisplay}
              >
            </input>

          )
      if(this.props.inputType === 'textarea'){
        input = (
          <textarea
            className={this.props.inputType}
            rows="6"
            placeholder={this.props.placeholder}
            onChange={this.changeValue}
            value={this.props.getValue() || ''}
          />
        )
      }else if (this.props.inputType === 'file'){
        input = (<FileInput
          name={this.props.name}
           accept={this.props.acceptExtensions}
           placeholder={this.props.placeholder}
           className={this.props.inputType}
           onChange={this.changeValue}
           value={this.props.getValue() || ''}
            />
       )
      }


    return(
      <div className="Input-wrapper">
        {input}
        <p>{this.state.errorMessage}</p>
      </div>
    )
  }
}

export default withFormsy(Input);

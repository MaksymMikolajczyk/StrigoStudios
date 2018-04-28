import React from 'react'
import {FaFile} from 'react-icons/lib/fa'

class FileInput extends React.Component {
  state = {
    value: ''
  }

  handleChange = (e)=> {
    this.setState({
      value: e.target.value.split(/(\\|\/)/g).pop()
    });
    if (this.props.onChange) this.props.onChange(e);
  }

  render () {
    return(
      <div style={{position: 'relative', width: "100%"}}>
        <label htmlFor="attachment"><FaFile style={{color: 'rgb(99, 99, 99)', fontSize: '2.5em', verticalAlign: 'top', display:"inline-block"}} /></label>
        <input
          style={{  position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0,
            width: '100%',
            zIndex: 1,
          fontSize: '2.0em',
        cursor: 'pointer'}}
          type="file"
          onChange={this.handleChange}
          accept={this.props.accept}
          />
        <input
          type="text"
          tabIndex="-1"
          name={this.props.name}

          className={this.props.className}
          placeholder={this.props.placeholder}
          />
        <p style={{color: 'rgb(99, 99, 99)', fontSize: '1.5em'}}>{this.state.value}</p>


      </div>)
    }
}

export default FileInput;

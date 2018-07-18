import React, { Component } from 'react';
import "./css/biginput.css";

export default class Biginput extends Component {
  render() {
    return (
        <input style={this.props.style} className={"c-big-input " + this.props.className} type="text" placeholder={this.props.placeholder}/>
    )
  }
}

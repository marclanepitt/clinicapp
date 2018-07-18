import React, { Component } from 'react';
import "./css/button.css";

export default class Button extends Component {
  render() {
    return (
      <button onClick = {this.props.onClick} className = {"c-btn c-btn-"+this.props.type + " c-btn-" + this.props.size + " " + this.props.className}>
        {this.props.text}
      </button>
    )
  }
}
import React, { Component } from 'react';
import "../../scss/elements/button.css";

export default class Button extends Component {
  render() {
    return (
      <button onClick = {this.props.disabled ? ()=>{} : this.props.onClick} className = {"c-btn c-btn-"+this.props.type + (this.props.size ? " c-btn-" + this.props.size : "") + " " + (this.props.className ? this.props.className : "") + " " + (this.props.disabled ? "c-btn-"+this.props.type+"--disabled" : "")}>
        {this.props.text}
      </button>
    )
  }
}
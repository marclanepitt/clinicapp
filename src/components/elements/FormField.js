import React, { Component } from 'react'
import "../../scss/elements/formfield.css";

export default class FormField extends Component {
  render() {
    return (
      <input type={this.props.type} placeholder={this.props.placeholder} className="c-form-field"/>
    )
  }
}

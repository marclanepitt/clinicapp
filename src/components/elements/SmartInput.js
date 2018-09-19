import React, { Component } from 'react'
import "../../scss/elements/smartselect.css";

export default class SmartInput extends Component {
  render() {

    return (
      <div className="sport-select-outer">
        <input
          tabIndex="0"
          className={"smart-select-input " + this.props.className}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}



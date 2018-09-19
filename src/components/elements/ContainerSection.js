import React, { Component } from 'react';
import "../../scss/elements/containersection.css";

export default class ContainerSection extends Component {
  render() {
    return (
      <div className={"c-container-section " + this.props.className}>
        {this.props.title ? 
          <div className="c-container-section-header">
          {this.props.title}
          </div>
          :
        <div/>
        }
        <div className="c-page-padding-tiny">
            {this.props.children}
        </div>
      </div>
    )
  }
}
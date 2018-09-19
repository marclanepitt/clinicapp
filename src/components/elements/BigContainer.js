import React, { Component } from 'react';
import "../../scss/elements/bigcontainer.css";

export default class BigContainer extends Component {
  render() {
    return (
      <div className={"c-big-container " + this.props.className}>
        <div className="c-big-container-tab">
          {this.props.header}
        </div>
        <div className="c-page-padding-min">
            {this.props.children}
        </div>
      </div>
    )
  }
}
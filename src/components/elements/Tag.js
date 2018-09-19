import React, { Component } from 'react';
import "../../scss/elements/tag.css";

export default class Tag extends Component {
  render() {
    return (
        <div className="c-filter-tag">
            {this.props.text} <i className="far fa-times-circle"/>
        </div>
    )
  }
}
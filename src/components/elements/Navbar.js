import React, { Component } from 'react';
import "../../scss/elements/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="c-nav">
        <div className="c-nav-logo">
            ClinicBlitz
        </div>
        {this.props.navElements.map( (el) =>{
          return <div className="c-nav-el c-nav-right c-margin-right-3">
              {el}
          </div>
        })}
      </div>
    )
  }
}

import React, { Component } from 'react';
import "../../scss/elements/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="c-nav">
        <div className="c-nav-logo">
            ClinicBlitz
        </div>
        {this.props.navElements.map( (el, i) =>{
          return <div key={i} className="c-nav-el c-nav-right">
              {el}
          </div>
        })}
      </div>
    )
  }
}

import React, { Component } from 'react';
import Button from "../elements/Button";
import "../../scss/elements/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="c-nav">
        <div className="c-nav-logo">
            ClinicBlitz
        </div>
        <div className="c-nav-el c-nav-right c-margin-right-3">
            <Button text="Login" type="default" />
        </div>
        <div className="c-nav-el c-nav-right">
            <Button text="Run a Clinic?" type="success" />
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import "./css/clinic-display.css";

export default class ClinicDisplay extends Component {
  render() {
    return (
      <div className="c-clinic-display">
        <div className="c-sports-banner">
          <div className={"icon-"+this.props.clinic.sport.toLowerCase()}/>
        </div>
        <div className="c-clinic-image" style={{backgroundImage:'url('+this.props.clinic.image+')'}}>
          <div className="c-clinic-overlay">
          {this.props.clinic.name}
          </div>
        </div>
      </div>
    )
  }
}

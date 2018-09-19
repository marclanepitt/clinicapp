import React, { Component } from 'react';
import "../../scss/elements/calendarbanner.css";

export default class CalendarBanner extends Component {

  ordinal(i) {
    var j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return "st";
    }
    if (j === 2 && k !== 12) {
        return "nd";
    }
    if (j === 3 && k !== 13) {
        return "rd";
    }
    return "th";
  }

  render() {
    return (
      <div className="calendar-banner" style={{marginLeft:this.props.xpos, marginTop:this.props.ypos}}>
        <div className="calendar-banner-month">
            {this.props.month} <span>'{this.props.year}</span>
        </div>
        <div className="calendar-banner-date">
            {this.props.day}<span>{this.ordinal(this.props.day)}</span>
        </div>
      </div>
    )
  }
}
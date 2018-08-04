import React, { Component } from 'react'
import Biginput from "../elements/Biginput";
import SportSelect from "../elements/SportSelect";
import ClinicSection from "./ClinicSection";
import Button from "../elements/Button";

import "../../scss/landing/landing.css";

const data = [
 'Hockey',
 'Soccer',
 'Football',
 'Baseball',
 'Basketball',
 'Golf',
 'Tennis',
 'Curling',
 'Wrestling',
 'Ultimate',
 'Rugby',
 'Swim',
 'Volleyball',
 'Lacrosse',
 'Ping Pong',
 'Badminton'
]

export default class Home extends Component {

  route(path) {
    this.props.history.push(path);
  }

  render() {

    return (
      <div>
        <section id="search">
            <h1 className="text-center no-margin main-title">Take yourself to the next LEVEL</h1>
            <h4 className="text-center no-margin sub-title">Find the best sports clinics and camps near you!</h4>
            <div className="search-center-box">
                <Biginput placeholder="Zipcode" className="zip-code-input" />
                <SportSelect
                  placeholder="Sport"
                  sports = {data}
                />
                <Button text="GO" type="primary" size="large" onClick={()=>this.props.routeAndLoad(()=>this.route("/clinics"))} />
            </div>
        </section>
        <ClinicSection title="Features" />
      </div>
    )
  }
}
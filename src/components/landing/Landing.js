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
            <h1 className="text-center no-margin main-title">Get to the next LEVEL</h1>
            <h4 className="text-center no-margin sub-title">Find the best sports clinics and camps near you</h4>
            <div className="search-center-box">
                <Biginput placeholder="Zipcode" className="zip-code-input" />
                <SportSelect
                  placeholder="Sport"
                  sports = {data}
                />
                <Button onClick={()=>this.props.history.push("/clinics")} text="GO" type="primary" size="large" />
            </div>
        </section>
        <ClinicSection title="Features" />
      </div>
    )
  }
}

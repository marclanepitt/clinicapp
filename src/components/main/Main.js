import React, { Component } from 'react';
import TopBar from "./Topbar"
import ClinicDisplay from "./ClinicDisplay";
import { clinics } from "../base/sportsList";

export default class Main extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div style={{paddingTop:'20vh'}}>
        {clinics.map((clinic)=> {
            return <ClinicDisplay clinic={clinic} />
        })
        }
        </div>
      </div>
    )
  }
}

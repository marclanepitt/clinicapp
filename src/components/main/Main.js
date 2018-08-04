import React, { Component } from 'react';
import TopBar from "./Topbar"
import ClinicCardBody from "./ClinicCardBody";
import Card from "../elements/Card";
import { clinics } from "../../dev/sportsList";
import ApiInstance from "../../js/Api.js";

const Api = ApiInstance.instance;

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      clinics: {},
    }
  }

  componentDidMount() {
    Api.getClinics().then(function(response) {
      this.setState({
        clinics: this.state.clinics + clinics,
      })
    });
  }



  mapSportToIcon(sport) {
    return <div> {sport}  <span className={"icon-"+sport.replace(/\s+/g, '-').toLowerCase()}/></div>;
  }

  render() {
    return (
      <div>
        <TopBar />
        <div className="navbar-padding grey-bg-10">
        {clinics.map((clinic)=> {
            return <Card image={clinic.image} title={clinic.name} category={this.mapSportToIcon(clinic.sport)} body={<ClinicCardBody clinic={clinic}/>}/>
        })
        }
        </div>
      </div>
    )
  }
}

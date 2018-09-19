import React, { Component } from 'react';
import TopBar from "./Topbar"
import ClinicCardBody from "./ClinicCardBody";
import Card from "../elements/Card";
import ApiInstance from "../../js/Api.js";

const Api = ApiInstance.instance;

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      clinics: {},
    }
  }

  componentDidMount() {
    let _this = this;
    Api.getClinics().then(function(response) {
      _this.setState({
        clinics: response,
        loading: false,
      })
    });
  }



  mapSportToIcon(sport) {
    return <div> {sport}  <span className={"icon-"+sport.replace(/\s+/g, '-').toLowerCase()}/></div>;
  }

  render() {
    return (
      <div>
      {this.state.loading ? 
        <div></div>
        :
        <div>
          <TopBar />
          <div className="navbar-padding grey-bg-10">
          {this.state.clinics.map((clinic)=> {
              return <Card onClick={()=>{this.props.history.push("/clinics/"+clinic.id)}} key={clinic.id} image={clinic.clinic.image} subtitle={clinic.name} title={clinic.clinic.name} category={this.mapSportToIcon(clinic.clinic.sport.name)} body={<ClinicCardBody clinic={clinic}/>}/>
          })
          }
          </div>
        </div>
      }
      </div>
    )
  }
}

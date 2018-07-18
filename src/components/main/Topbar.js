import React, { Component } from 'react';
import "./css/topbar.css";
import BigInput from "../elements/Biginput";
import SportsSelect from "../home/SportSelect";
import {data} from "../base/sportsList";


export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTopBar:true,
    }

  }
  render() {
    return (
      <div>
      {this.state.showTopBar ? 
          <div className="c-topbar">
            <div className="c-topbar-el">
                <BigInput placeholder = "Name" style={{marginLeft:"6vw"}} />
            </div>
            <div className="c-topbar-el">
              <SportsSelect sports={data} placeholder="Sport"/>
            </div>
            <div className="c-topbar-el">
                <BigInput placeholder="Location" style={{width:"7vw"}} />
              </div>
            <div className="c-topbar-el">
                <BigInput placeholder="Date" style={{width:"6vw",marginLeft: "1vw"}} />
            </div>
            <div className="c-topbar-el">
                <BigInput placeholder="Age" style={{width:"4vw",marginLeft: "1vw"}} />
            </div>
            <div className="c-topbar-el">
                <BigInput placeholder="Skill" style={{width:"6vw",marginLeft: "1vw"}} />
            </div>
            <div className="c-topbar-el">
                <BigInput placeholder="Rating" style={{width:"6vw",marginLeft: "1vw"}} />
            </div>
            <div className="c-topbar-hide" onClick = {() => this.setState({showTopBar:false})}>
            </div>
          </div>
          :
          <div className="c-topbar-show" onClick = {() => this.setState({showTopBar:true})}>
          </div>   
      }
      </div>
      
    )
  }
}

import React, { Component } from 'react';
import "../../scss/main/topbar.css";
import Tag from "../elements/Tag";
import Button from "../elements/Button";
import SmartInput from "../elements/SmartInput";


export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTopBar:true,
    }

  }
  render() {
    return (
      <div className="c-topbar">
        <div className="c-topbar-filters">
          <SmartInput className="topbar-smart-input" placeholder="Search Location"/>
          <Button text="Apply" type="primary"/>
        </div>
        <div className="c-topbar-filter-tags">
          <Tag text="11561"/>
        </div>
      </div>
    )
  }
}

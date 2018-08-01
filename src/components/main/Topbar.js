import React, { Component } from 'react';
import "../../scss/main/topbar.css";
import Tag from "../elements/Tag";


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
        </div>
        <div className="c-topbar-filter-tags">
          <Tag text="11561"/>
        </div>
      </div>
    )
  }
}

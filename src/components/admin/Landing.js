import React, { Component } from 'react';
import "../../scss/admin/landing.css";
import Button from "../elements/Button";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  render() {
    return (
      <div className="c-page-padding">
          <div className="c-admin-landing-col right-border">
              <div>
                Drive more athletes to your clinic
              </div>
              <div>
                ClinicBlitz makes it easy for athletes to find you with location-based search
              </div>
          </div>
          <div className="c-admin-landing-col">
                <div>
                  Manage Registration with ease
                </div>
                <div>
                  ClinicBlitz handles online payments
                </div>
          </div>
          <div className="c-admin-landing-col left-border">
                <div>
                  Understand your numbers
                </div>
                <div>
                  ClinicBlitz analytics makes managing your earnings easy as pie
                </div>
          </div>
        <div className="inline-block text-center full-width c-margin-top-5">
          <Button size="large" type="primary" text="Contact Us"/>
          <Button className="c-margin-left-1" size="large" type="success" text="Register"/>
        </div>
      </div>
    )
  }
}

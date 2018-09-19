import React, { Component } from 'react';
import "../../scss/main/clinic-card-body.css";
import RatingStars from "../elements/RatingStars";

export default class ClinicCardBody extends Component {
  render() {
    return (
        <div>
            <RatingStars rating={this.props.clinic.rating.rating__avg} className="text-center c-padding-top-3"/>
            <div className="c-card-body-location text-center c-padding-top-3">
                <span className="fas fa-map-marker red-color-20 text-center"/> {this.props.clinic.location}
            </div>
            <div className="c-card-body-price text-center c-padding-top-2 primary-blue text-font bold">
            ${this.props.clinic.price}
            </div>
        </div>
    )
  }
}
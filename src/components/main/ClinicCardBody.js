import React, { Component } from 'react';
import "../../scss/main/clinic-card-body.css";

export default class ClinicCardBody extends Component {

    renderStars(rating) {
        let stars = []

        for(let i = 0; i < 5; i++) {
            if(i < rating) {
                stars.push(<span className="fas fa-star yellow-color-20"/>)
            } else {
                stars.push(<span className="fa fa-star gainsboro"/>)
            }
        }
        return stars
    }

  render() {
    return (
        <div>
            <div className="c-card-body-stars text-center c-padding-top-3">
                {this.renderStars(this.props.clinic.rating)}
            </div>
            <div className="c-card-body-location text-center c-padding-top-3">
                <span className="fas fa-map-marker red-color-20 text-center"/> Long Beach, NY
            </div>
            <div className="c-card-body-price text-center c-padding-top-3 green-color-20">
            $100 - $200
            </div>
        </div>
    )
  }
}
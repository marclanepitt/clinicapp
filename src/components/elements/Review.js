import React, { Component } from 'react';
import RatingStars from "./RatingStars";
import "../../scss/elements/review.css";

export default class Button extends Component {
  render() {
    console.log(this.props.review.rating)
    return (
        <div className="c-review-container">
          <div className="primary-blue bold c-margin-bottom-1">
            {this.props.review.reviewer}
            <RatingStars rating={parseInt(this.props.review.rating, 10)}/>
          </div>
            {this.props.review.comment}
        </div>
    )
  }
}
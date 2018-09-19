import React, { Component } from 'react';
import "../../scss/elements/ratingstars.css";

export default class RatingStars extends Component {

    renderStars(rating) {
        let stars = []

        for(let i = 0; i < 5; i++) {
            if(i < rating) {
                stars.push(<span key={i} className="fas fa-star yellow-color-20"/>)
            } else {
                stars.push(<span key={i} className="fa fa-star gainsboro"/>)
            }
        }
        return stars
    }


  render() {
    return (
        <div className={this.props.className}>
            {this.renderStars(this.props.rating)}
        </div>
    )
  }
}


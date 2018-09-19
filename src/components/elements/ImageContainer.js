import React, { Component } from 'react';
import "../../scss/elements/imagecontainer.css";

export default class ImageContainer extends Component {
  render() {
    return (
        <div className="image-container scale-background-image" style={{backgroundImage: "url(" + this.props.image  + ")"}}/>
    )
  }
}
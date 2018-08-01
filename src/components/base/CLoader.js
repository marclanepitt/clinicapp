import React, { Component } from 'react'
import { BeatLoader } from 'react-spinners';
import "../../scss/base/loader.css";

export default class CLoader extends Component {
  render() {
    return (
      <div className="c-loader">
        <div className="c-loader-text">
          Searching Clinics
        </div>
        <BeatLoader color={'#314159'} />
      </div>
    )
  }
}

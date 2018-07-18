import React, { Component } from 'react'
import { BeatLoader } from 'react-spinners';
import "./css/loader.css";

export default class CLoader extends Component {
  render() {
    return (
      <div className="c-loader">
      <BeatLoader color={'#314159'} />
      </div>
    )
  }
}

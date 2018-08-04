import React, { Component } from 'react'

export default class NavbarLoader extends Component {
  render() {
    return (
      <div className="navbar-loader" style={{width:this.props.progress+"%"}}/>
    )
  }
}

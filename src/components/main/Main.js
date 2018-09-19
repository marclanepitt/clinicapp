import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import List from "./List";
import Detail from "./Detail";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/clinics" component = {List}/>
            <Route path="/clinics/:id" component = {Detail}/>
        </Switch>
      </div>
    )
  }
}

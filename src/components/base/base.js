import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarLoader from "./NavbarLoader";
import Home from "../home/Home";
import Main from "../main/Main";
import Loader from "./CLoader";

export default class Base extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      navbarLoader:false,
      progress:0,
    }
    this.routeAndLoad = this.routeAndLoad.bind(this);
  }

  componentDidMount() {
    this.setState({
      navbarLoader:false,
    })
  }

  routeAndLoad(callback) {
    let _this = this;

    this.setState({
      loading:true,
      navbarLoader: true,
    });

    setTimeout(()=>handleFakeLoad(10),1000);
    setTimeout(()=>handleFakeLoad(30),2000);
    setTimeout(()=>handleFakeLoad(50),2000);
    setTimeout(()=>handleFakeLoad(70),3000);
    setTimeout(callback, 4000)
    setTimeout(()=>handleFakeLoad(80),4000);
    setTimeout(()=>handleFakeLoad(90),4500);
    setTimeout(()=>this.setState({loading:false}),4600);
    setTimeout(()=>handleFakeLoad(100),5000);
    setTimeout(()=>this.setState({navbarLoader:false, progress:0}),5100);



    function handleFakeLoad(progress) {
      _this.setState({
        progress: progress
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.navbarLoader &&
          <NavbarLoader progress={this.state.progress}/>
        }
        <div id="content">
        {this.state.loading ?
          <Loader text="Finding your next clinic"/>
        :
        <Switch>
          <Route children={({ history }) => <Home routeAndLoad={this.routeAndLoad} history={history} {...this.props} />} exact path="/" />
          <Route children={({ history }) => <Main routeAndLoad={this.routeAndLoad} history={history} {...this.props} />} path="/clinics"/>
        </Switch>
        }
        </div>
      </div>
    )
  }
}

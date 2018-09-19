import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "../elements/Navbar";
import NavbarLoader from "../elements/NavbarLoader";
import Landing from "../landing/Landing";
import Main from "../main/Main";
import AdminLanding from "../admin/Landing";
import Loader from "../elements/CLoader";
import Button from "../elements/Button";
import { withRouter } from "react-router-dom";

class Base extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      navbarLoader:false,
      progress:0,
    }
  }

  componentDidMount() {
    this.setState({
      navbarLoader:false,
    });
  }

  render() {
    const navElements = [];
    if(this.props.location.pathname === "/admin") {
      navElements.push(<Button onClick={()=>this.props.history.push("/admin")} text="Login" type="primary" />)
    } else {
      navElements.push(<Button onClick={()=>this.props.history.push("/admin")} text="Run a Clinic?" type="success" />)
    }


    return (
      <div>
        <Navbar navElements={navElements}/>
        {this.state.navbarLoader &&
          <NavbarLoader progress={this.state.progress}/>
        }
        <div id="content">
        {this.state.loading ?
          <Loader text="Finding your next clinic"/>
        :
        <Switch>
          <Route children={({ history }) => <Landing routeAndLoad={this.routeAndLoad} history={history} {...this.props} />} exact path="/" />
          <Route children={({ history }) => <Main history={history} setLoading={this.setLoading} {...this.props} />} path="/clinics"/>
          <Route children={({ history }) => <AdminLanding history={history} {...this.props} />} path="/admin" />
        </Switch>
        }
        </div>
      </div>
    )
  }
}
export default withRouter(Base);

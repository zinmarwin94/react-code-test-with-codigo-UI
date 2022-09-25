import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout"; 
import Landing from "./container/Landing"; 
import Home from "./Home"; 
// TODO:: add home page

class App extends Component {
  render() {
    let routes = (
      <Switch> 
        <Route path="/" exact component={Landing} /> 
        <Route to="/apple-tv-plus" exact component={Home} />
        {/* <Redirect to="/" /> */}
      </Switch>
    );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default withRouter(connect(null)(App));

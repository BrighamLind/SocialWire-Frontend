import React, { Component } from "react";

import Profiles from "./profiles";

import "../style/main.scss";
import NavigationBar from "./navbar";
import FooterNavBar from "./footer";
import Copyright from "./copyright";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavigationBar />
        <Profiles />
        <FooterNavBar />
        <Copyright />
      </div>
    );
  }
}

import React, { Component } from "react";

import NavigationBar from "./navbar";
import FooterNavBar from "./footer";
import Copyright from "./copyright";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavigationBar />
        <FooterNavBar />
        <Copyright />
      </div>
    );
  }
}

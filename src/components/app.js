import React, { Component } from "react";

import Profiles from "./profiles";

import "../style/main.scss";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Profiles />
        <h2>React Redux Router</h2>
      </div>
    );
  }
}

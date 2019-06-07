import React from "react";

import Profiles from "./profiles";
import MyRouter from "./router-page";
import NavigationBar from "./navbar";
import FooterNavBar from "./footer";
import Copyright from "./copyright";
import "../style/main.scss";

const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <MyRouter />
      <FooterNavBar />
      <Copyright />
    </div>
  );
};

export default App;

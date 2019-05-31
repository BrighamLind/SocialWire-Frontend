import React from "react";

import Logo from "../../static/assets/images/grizzlymkv_norm.png";

const NavigationBar = () => {
  return (
    <div className="nav-wrapper">
      <div className="left">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="center">
        <a className="nav-link" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          Users
        </a>
        <a className="nav-link" href="#">
          About
        </a>
        <a className="nav-link" href="#">
          Contact
        </a>
      </div>

      <div className="right">Chunky Monkey</div>
    </div>
  );
};

export default NavigationBar;

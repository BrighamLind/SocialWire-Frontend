import React from "react";

import Profiles from "./profiles";
import NavigationBar from "./navbar";
import FooterNavBar from "./footer";
import Copyright from "./copyright";
import "../style/main.scss";

const MyRouter = () => {
  const [currentRoute, setRoute] = React.useState("/");

  React.useEffect(() => {}, [currentRoute]);

  if (currentRoute === "/") {
    return <Profiles setRoute={setRoute} />;
  }
};

export default MyRouter;

import React from "react";
import axios from "axios";

// main page content

import ProfileCard from "./profile-card";
import CreateProfile from "./create-card";

const Profiles = () => {
  const [profileCards, setProfileCards] = React.useState([]);
  const profileRef = React.createRef();

  React.useEffect(() => {
    getPortfolioItems();
  }, []);

  const getPortfolioItems = () => {
    axios
      .get("https://bottega-social-wire.herokuapp.com/turpentine")
      .then(response => {
        console.log(response.data);
        setProfileCards([...response.data]);
      })
      .catch(error => {
        console.log("profiles page error kysen", error);
      });
  };

  return (
    <div className="profiles">
      <ProfileCard axiosData={profileCards} />

      <CreateProfile
        getPortfolioItems={getPortfolioItems}
        profileRef={profileRef}
      />
    </div>
  );
};

export default Profiles;

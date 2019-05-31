import React from "react";

// main page content

import ProfileCard from "./profile-card";
import CreateProfile from "./create-card";

const Profiles = () => {
  return (
    <div className="profiles">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />

      <CreateProfile />
    </div>
  );
};

export default Profiles;

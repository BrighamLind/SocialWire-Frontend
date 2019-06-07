import React, { useState, useEffect } from "react";

// main page content

import samplePic from "../sampleImageDeleteLater/bb-kysen.jpg";

const ProfileCard = props => {
  const profileList = props.axiosData.map(item => {
    return (
      <div key={item.id} className="profileCard">
        <div className="profile-image" style={{backgroundImage: "url(" + item[1] + ")"}} />
        <h2>{item[2]}</h2>
        <p>{item[3]}</p>
        <button>button</button>
      </div>
    );
  });
  return profileList;
};

export default ProfileCard;

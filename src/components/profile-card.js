import React from "react";
import { NavLink } from "react-router-dom";

// main page content

const ProfileCard = props => {
  const profileList = props.axiosData.map(item => {
    return (
      <div key={item.id} className="profileCard">
        <div className="profile-image" style={{backgroundImage: "url(" + item.image + ")"}} />
        <h2>{item.name}</h2>
        <div className="line" />
        <p>{item.description}</p>
        <button>delete TODO</button>
        <NavLink className="btn" to="/button">
          button
        </NavLink>
      </div>
    );
  });
  return profileList;
};

export default ProfileCard;

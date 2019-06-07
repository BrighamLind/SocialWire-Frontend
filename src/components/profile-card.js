import React from "react";
import { NavLink } from "react-router-dom";

// main page content

const ProfileCard = props => {
  const profileList = props.axiosData.map(item => {
    return (
      <div key={item.id} className="profileCard">
        <div
          className="profile-image"
          style={{ backgroundImage: "url(" + item.image + ")" }}
        />
        <h2>{item.name}</h2>
        <div className="line" />
        <p>{item.description}</p>
        <button className="btn" onClick={() => props.handleDeleteClick(item)}>
          delete TODO
        </button>
        <button className="btn" to={`/profile-card/${item.id}`}>
          button
        </button>
      </div>
    );
  });
  return profileList;
};

export default ProfileCard;

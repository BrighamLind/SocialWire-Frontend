import React, { useState, useEffect } from "react";

import axios from "axios";

// main page content

import samplePic from "../sampleImageDeleteLater/bb-kysen.jpg";

const ProfileCard = () => {
  const [cards, setCards] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios (
  //       "https://bottega-social-wire.herokuapp.com/turpentine"
  //     )

  //     // console.log(setCards(result.data));
  //   }
  // }

  return (
    <div className="profileCard">
      <img src={samplePic} />
      <h2>Name</h2>
      <p>Description</p>
      <button>Button</button>
    </div>
  );
};

export default ProfileCard;

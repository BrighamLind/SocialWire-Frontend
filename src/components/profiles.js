import React from "react";
import axios from "axios";

// main page content

import ProfileCard from "./profile-card";
import CreateProfile from "./create-card";

class Profiles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profileCards: []
    };

    this.profileRef = React.createRef();
  }

  getPortfolioItems() {
    axios
      .get("https://bottega-social-wire.herokuapp.com/turpentine")
      .then(response => {
        console.log(response.data);
        this.setState({
          profileCards: [...response.data]
        });
        console.log(this.state.profileCards);
      })
      .catch(error => {
        console.log("profiles page error kysen", error);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className="profiles">
        <ProfileCard axiosData={this.state.profileCards} />

        <CreateProfile profileRef={this.profileRef} />
      </div>
    );
  }
}

export default Profiles;

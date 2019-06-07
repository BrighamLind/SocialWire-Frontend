import React, { useState } from "react";
import DropzoneComponent from "react-dropzone-component";

import axios from "axios";

import "../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../node_modules/dropzone/dist/min/dropzone.min.css";

const CreateProfile = props => {
  const [newImage, setImage] = useState("");
  const [newName, setName] = React.useState("");
  const [newDescription, setDescription] = useState("");

  // const [cardArray, setCardArray] = useState([]);

  // const handleSuccessfulFormSubmission = data => {
  //   setCardArray([data].concat(cardArray));
  // };
  const clearDropzone = ref => {
    ref.current.dropzone.removeAllFiles();
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(newImage.dataURL);
    axios({
      method: "post",
      url: "https://bottega-social-wire.herokuapp.com/add-user",
      data: {
        image: newImage.dataURL,
        name: newName,
        description: newDescription
      }
    })
      .then(response => {
        console.log(response);

        setImage("");
        setName("");
        setDescription("");

        clearDropzone(props.profileRef);

        props.getPortfolioItems();
      })
      .catch(error => {
        console.log("I caught the error", error);
      });
  };

  const componentConfig = () => {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  };

  const djsConfig = () => {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  };

  const handleThumbDrop = () => {
    return {
      addedfile: file => setImage(file)
    };
  };

  return (
    <div className="create-card">
      <form onSubmit={handleSubmit}>
        <DropzoneComponent
          ref={props.profileRef}
          config={componentConfig()}
          djsConfig={djsConfig()}
          eventHandlers={handleThumbDrop()}
        >
          <div className="dz-message">Profile Picture</div>
        </DropzoneComponent>

        <input
          className="newName"
          type="text"
          name="name"
          placeholder="New User Name"
          value={newName}
          onChange={event => setName(event.target.value)}
        />
        <textarea
          className="newDescription"
          type="text"
          name="description"
          placeholder="Description"
          value={newDescription}
          onChange={event => setDescription(event.target.value)}
        />
        <button className="btn" type="submit">
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;

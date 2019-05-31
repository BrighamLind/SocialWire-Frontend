import React, { useState } from "react";
import DropzoneComponent from "react-dropzone-component";

import axios from "axios";

import "../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../node_modules/dropzone/dist/min/dropzone.min.css";

const CreateProfile = () => {
  const [newImage, setImage] = useState("");
  const [newName, setName] = useState("");
  const [newDescription, setDescription] = useState("");

  //

  const buildForm = () => {
    let formData = new FormData();

    formData.append("image", newImage);
    formData.append("name", newName);
    formData.append("description", newDescription);
    return formData;
  };

  const handleSuccessfulFormSubmission = () => {
    setImage("");
    setName("");
    setDescription("");
  };

  const handleSubmit = event => {
    axios
      .post("https://bottega-social-wire.herokuapp.com/add-user", buildForm())
      .then(() => {
        // ToDo
        handleSuccessfulFormSubmission();
      })
      .catch(error => {
        console.log("portfolio form handleSubmit error", error);
      });
    event.preventDefault();
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

  const thumbRef = React.createRef();

  const handleThumbDrop = () => {
    return {
      addedfile: file => setImage(file)
    };
  };

  return (
    <div className="create-card">
      <form onSubmit={handleSubmit}>
        <DropzoneComponent
          ref={thumbRef}
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
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateProfile;

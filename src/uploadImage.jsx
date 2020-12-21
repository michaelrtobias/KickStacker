import React, { useEffect, useState } from "react";
import axios from "axios";

function UploadImage(props) {
  const [uploadClicked, setUploadClicked] = useState(false);
  const [uploadedFile, setUploadedFile] = useState("");

  const uploadImage = () => {};

  const uploadOptions = () => {
    if (uploadClicked === true) {
      return (
        <div>
          <input type="file" value={}></input>
          <button>Take Picture</button>
        </div>
      );
    }
  };
  return (
    <div>
      <label>Upload A Photo</label>
      <button onClick={() => setUploadClicked(true)}>Upload</button>
      {uploadOptions()}
    </div>
  );
}

export default UploadImage;

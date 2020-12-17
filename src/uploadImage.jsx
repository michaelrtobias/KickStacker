import React, { useEffect, useState } from "react";

function UploadImage(props) {
  const [uploadClicked, setUploadClicked] = useState(false);

  const uploadOptions = () => {
    if (uploadClicked === true) {
      return (
        <div>
          <button>From Device</button>
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

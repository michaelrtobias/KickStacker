import React, { useEffect, useState } from "react";

function UploadImage(props) {
  const [uploadClicked, setUploadClicked] = useState(false);

  return (
    <div>
      <label>Upload A Photo</label>
      <button onClick={() => setUploadClicked(true)}>Upload</button>
    </div>
  );
}

export default UploadImage;

import React, { useEffect, useState } from "react";
import axios from "axios";

function UploadImage(props) {
  const [uploadClicked, setUploadClicked] = useState(false);
  const [uploadedFile, setUploadedFile] = useState("");
  const [url, setUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [uploadInput, setUploadInput] = useState("");

  const uploadImage = () => {
    let file = uploadInput.files[0];
    console.log("file:");
    console.log(file);
    let fileParts = uploadInput.files[0].name.split(".");
    console.log("file parts: " + fileParts);
    let fileName = fileParts[0];
    console.log("filename: " + fileName);
    let fileType = fileParts[1];
    console.log("file type: " + fileType);

    console.log("Preparing the upload");
    axios
      .post("/upload/image", {
        fileName: fileName,
        fileType: fileType,
      })
      .then((response) => {
        var returnData = response.data.data.returnData;
        var signedRequest = returnedData.signedRequest;
        var url = returnedData.url;
        setUrl(url);
        console.log("Recieved a signed request " + signedRequest);
        var options = {
          headers: {
            "Content-Type": fileType,
          },
        };
        axios
          .put(signedRequest, file, options)
          .then((result) => {
            console.log("Response from s3");
            setSuccess(true);
          })
          .catch((error) => {
            alert("ERROR " + JSON.stringify(error));
          });
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };

  // const uploadOptions = () => {
  //   if (uploadClicked === true) {
  //     return (
  //       <div>
  //         <input
  //           type="file"
  //           onChange={setUploadedFile}
  //           ref={(ref) => {
  //             this.uploadInput = ref;
  //           }}
  //         ></input>
  //         <button>Take Picture</button>
  //       </div>
  //     );
  //   }
  // };
  const handleChange = () => {
    setSuccess(false);
    setUrl("");
  };
  return (
    <div>
      <label>Upload A Photo</label>
      {/* <button onClick={() => setUploadClicked(true)}>Upload</button> */}
      {/* {uploadOptions()} */}
      <input
        type="file"
        ref={(ref) => {
          setUploadInput(ref);
        }}
        onChange={() => {
          handleChange();
        }}
      ></input>
      <button onClick={() => uploadImage()}>Upload Here!</button>
    </div>
  );
}

export default UploadImage;

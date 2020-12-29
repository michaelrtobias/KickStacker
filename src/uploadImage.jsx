import React, { useEffect, useState } from "react";
import axios from "axios";

function UploadImage(props) {
  const [uploadClicked, setUploadClicked] = useState(false);
  const [uploadedFile, setUploadedFile] = useState("");
  const [URL, setUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [uploadInput, setUploadInput] = useState("");
  // const S3_Bucket = process.env.Bucket;

  const uploadImage = () => {
    var file = uploadInput.files[0];
    console.log("file:");
    console.log(file);
    var fileParts = uploadInput.files[0].name.split(".");
    console.log("file parts: " + fileParts);
    var fileName = fileParts[0];
    console.log("filename: " + fileName);
    var fileType = fileParts[1];
    console.log("file type: " + fileType);

    console.log("Preparing the upload");
    axios
      .post("/upload/image", {
        fileName: file.name,
        fileType: file.type,
      })
      .then((response) => {
        var returnedData = response.data.data.returnData;
        var signedRequest = returnedData.signedRequest;
        var url = returnedData.url;
        setUrl(url);
        console.log("Recieved a signed request " + signedRequest);
        var options = {
          headers: {
            "Content-Type": file.type,
          },
        };
        axios
          .put(signedRequest, file, options)
          .then((result) => {
            console.log("Response from s3");
            setSuccess(true);
          })
          .catch((error) => {
            throw err;
          });
      })
      .then((response) => {
        axios
          .post("/images", {
            name: file.name,
            url: `https://shoesstacker.s3.amazonaws.com/${file.name}`,
            alt: fileName,
          })
          .then((res) => {
            props.setImageId(res.data.id);
          })
          .then(() => console.log("Image Stored in DB"))
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        throw err;
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

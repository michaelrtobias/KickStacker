import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const UploadSuccessful = styled.button`
  background-color: green;
  color: black;
`;

function UploadImage(props) {
  const [uploadClicked, setUploadClicked] = useState(false);
  const [uploadedFile, setUploadedFile] = useState("");
  const [URL, setUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [uploadInput, setUploadInput] = useState("");

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
      .post(
        "https://lj9cidfxy2.execute-api.us-east-1.amazonaws.com/dev/images/upload",
        {
          fileName: file.name,
          fileType: file.type,
        }
      )
      .then((response) => {
        debugger;
        var returnedData = response.data;
        var signedRequest = returnedData.signedRequest;
        var url = returnedData.url;
        setUrl(url);
        console.log("Recieved a signed request " + signedRequest);
        var options = {
          headers: {
            "Content-Type": file.type,
          },
        };
        debugger;
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

  const uploadButton = () => {
    if (success === true) {
      return (
        <UploadSuccessful onClick={() => uploadImage()}>
          Upload Successful
        </UploadSuccessful>
      );
    } else {
      return <button onClick={() => uploadImage()}>Upload Photo Here!</button>;
    }
  };

  const handleChange = () => {
    setSuccess(false);
    setUrl("");
  };
  return (
    <div>
      <label>Upload A Photo</label>
      <input
        type="file"
        ref={(ref) => {
          setUploadInput(ref);
        }}
        onChange={() => {
          handleChange();
        }}
      ></input>
      {uploadButton()}
    </div>
  );
}

export default UploadImage;

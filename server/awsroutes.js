const AWS = require("aws-sdk");
// const express = require("express");
const app = require("./index.js");
const dotenv = require("dotenv").config();

AWS.config.update({
  region: "us-east-1",
});

const S3_Bucket = process.env.Bucket;

app.post("/upload/image", (req, res) => {
  // const s3 = new AWS.S3();
  // const fileName = req.body.fileName;
  // const fileType = req.body.fileType;
  // const s3Params = {
  //   Bucket: S3_Bucket,
  //   key: fileName,
  //   Expires: 500,
  //   ContentType: fileType,
  //   ACL: "public-read",
  // };

  // const returnedData = {
  //   signedRequest: data,
  //   url: `https://${S3_Bucket}.s3.amazon.aws.com/${fileName}`,
  // };
  // s3.getSignedUrl("putObject", s3Params, (err, url) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     console.log("URL Created");
  //     res.json({ success: true, data: { returnedData } });
  //   }
  // });
  res.send("this thing works");
});

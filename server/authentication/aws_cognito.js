const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require("aws-sdk");
const request = require("request");
const jwkToPem = require("jwk-to-pem");
const jwt = require("jsonwebtoken");
global.fetch = require("node-fetch");
const dotenv = require("dotenv");

const poolData = {
  UserPoolid: process.env.AWS_COGNITO_USER_POOL_ID,
  ClientId: process.env.AWS_COGNITO_CLIENT_ID,
};
const pool_region = "us-east-1";

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

function RegiterUser() {
  var attributeList = [];
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "name", Value: "" })
  );
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "", Value: "" })
  );
}

("https://shoesstacker.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=408fvj1h6d0n4952pe0kiqscbi&redirect_uri=https://shoesstacker.com");

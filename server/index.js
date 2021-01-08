const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const awsroutes = require("./awsroutes.js");
// const db = require('../db/index.js');
const db = require("../db/controllers/users.js");
const models = require("../db/models.js");
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
const AWS = require("aws-sdk");

app.get("/", (req, res) => {
  res.send("Gotta Catch 'Em All");
});

// get all shoes
app.get("/shoes", (req, res) => {
  models.Shoe.findAll({})
    .then((result) => res.json(result))
    .then(() => console.log("All shoes recieved"))
    .catch((err) => console.log(err));
});

app.get("/user", (req, res) => {
  const userId = [req.query.userId];
  models.Shoe.findAll({
    where: {
      userId: userId,
    },
    include: [
      {
        model: models.Image,
      },
      {
        model: models.Model,
      },
      {
        model: models.Brand,
      },
      {
        model: models.User,
      },
      {
        model: models.Collection,
      },
      {
        model: models.Cut,
      },
      {
        model: models.Type,
      },
      {
        model: models.SizeType,
      },
    ],
  })
    .then((result) => res.json(result))
    .then(() => console.log("All user shoes recieved"))
    .catch((err) => console.log(err));
});

app.post("/shoes", (req, res) => {
  models.Shoe.create({
    name: req.body.name,
    styleCode: req.body.styleCode,
    color: req.body.color,
    size: req.body.size,
    sizetypeId: req.body.sizetypeId,
    boxStatus: req.body.boxStatus,
    wears: req.body.wears,
    purchasePrice: req.body.purchasePrice,
    description: req.body.description,
    receipt: req.body.receipt,
    nickname: req.body.nickname,
    modelId: req.body.modelId,
    brandId: req.body.brandId,
    userId: req.body.userId,
    collectionId: req.body.collectionId,
    cutId: req.body.cutId,
    typeId: req.body.typeId,
    collaborator: req.body.collaborator,
    imageId: req.body.imageId,
  })
    .then((result) => res.json(result))
    .then(() => console.log("Shoe Created!"))
    .catch((err) => console.log(err));
});

app.put("/shoes", (req, res) => {
  res.send("update shoes");
});

app.delete("/shoes", (req, res) => {
  res.send("delete shoes");
});

app.post("/users", (req, res) => {
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })
    .then((result) => res.json(result))
    .catch((err) => console.log(err))
    .then(() => console.log("User Created"));
});
app.get("/users", (req, res) => {
  models.User.findAll()
    .then((user) => res.json(user))
    .then(() => console.log("Users Recieved"))
    .catch((err) => console.log(err));
});

//get chosen user
app.get("/users/user", (req, res) => {
  const userId = [req.query.userId];
  models.User.findAll({
    where: {
      id: userId,
    },
  })
    .then((user) => res.json(user))
    .then(() => console.log("User Recieved"))
    .catch((err) => console.log(err));
});

app.get("/brands", (req, res) => {
  models.Brand.findAll({})
    .then((result) => res.json(result))
    .then(() => console.log("All Brands recieved"))
    .catch((err) => console.log(err));
});

app.post("/brands", (req, res) => {
  models.Brand.create({
    name: req.body.name,
    headquarters: req.body.headquarters,
  })
    .then((result) => res.json(result))
    .then(() => console.log("Brand Created"))
    .catch((err) => console.log(err));
});

app.get("/types", (req, res) => {
  models.Type.findAll({})
    .then((result) => res.json(result))
    .then(() => console.log("All Types recieved"))
    .catch((err) => console.log(err));
});

app.post("/types", (req, res) => {
  models.Type.create({
    name: req.body.name,
  })
    .then((result) => res.json(result))
    .then(() => console.log("Type Created"))
    .catch((err) => console.log(err));
});

app.get("/collections", (req, res) => {
  const brandId = [req.query.brandId];
  models.Collection.findAll({
    where: {
      brandId: brandId,
    },
  })
    .then((result) => res.json(result))
    .then(() => console.log(`All Collections recieved of brand: ${brandId}`))
    .catch((err) => console.log(err));
});

app.post("/collections", (req, res) => {
  models.Collection.create({
    name: req.body.name,
    brandId: req.body.brandId,
  })
    .then((result) => res.json(result))
    .then(() => console.log("Collection Created"))
    .catch((err) => console.log(err));
});

app.get("/models", (req, res) => {
  const collectionId = [req.query.collectionId];
  models.Model.findAll({
    where: {
      collectionId: collectionId,
    },
  })
    .then((result) => res.json(result))
    .then(() => console.log("All Models recieved"))
    .catch((err) => console.log(err));
});

app.post("/models", (req, res) => {
  models.Model.create({
    name: req.body.name,
    brandId: req.body.brandId,
    collectionId: req.body.collectionId,
  })
    .then((result) => res.json(result))
    .then(() => console.log("Model Created"))
    .catch((err) => console.log(err));
});

app.get("/cuts", (req, res) => {
  models.Cut.findAll({})
    .then((result) => res.json(result))
    .then(() => console.log("All Cuts recieved"))
    .catch((err) => console.log(err));
});

app.post("/cuts", (req, res) => {
  models.Cut.create({
    cut: req.body.cut,
  })
    .then((result) => res.json(result))
    .then(() => console.log("Cut Created"))
    .catch((err) => console.log(err));
});

app.get("/sizetypes", (req, res) => {
  models.SizeType.findAll({})
    .then((result) => res.json(result))
    .then(() => console.log("All sizetypes recieved"))
    .catch((err) => console.log(err));
});

app.post("/sizetypes", (req, res) => {
  models.SizeType.create({
    sizeType: req.body.sizeType,
  })
    .then((result) => res.json(result))
    .then(() => console.log("Size Type Created"))
    .catch((err) => console.log(err));
});

app.post("/images", (req, res) => {
  models.Image.create({
    name: req.body.name,
    url: req.body.url,
    alt: req.body.alt,
  })
    .then((result) => res.json(result))
    .then(() => console.log("Image Saved"))
    .catch((err) => console.log(err));
});

app.get("/images", (req, res) => {
  models.Image.findAll({})
    .then((result) => res.json(result))
    .then(() => console.log("All Imgaes Recieved"))
    .catch((err) => console.log(err));
});

AWS.config.update({
  region: "us-east-1",
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
});

const S3_Bucket = process.env.Bucket;

app.post("/upload/image", (req, res) => {
  const s3 = new AWS.S3();
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const s3Params = {
    Bucket: S3_Bucket,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: "public-read",
  };

  s3.getSignedUrl("putObject", s3Params, (err, url) => {
    if (err) {
      throw err;
    } else {
      debugger;
      const returnData = {
        signedRequest: url,
        url: `https://${S3_Bucket}.s3.amazonaws.com/${fileName}`,
      };
      console.log("URL Created");
      res.json({ success: true, data: { returnData } });
    }
  });
});
const SneaksAPI = require("sneaks-api");

const sneaks = new SneaksAPI();

// sneaks.getProducts("grinch", function (err, products) {
//   console.log(products);
// });

app.get("/sneakerdata", (req, res, callback) => {
  sneaks.getProducts(req.body.term, (err, shoes) => {
    if (err) {
      throw err;
    } else {
      res.send(shoes);
      console.log(`Shoes for ${req.body.term}`);
    }
  });
});

app.listen(process.env.APPPORT || 5000, () => {
  console.log(`Application is Connected on port ${process.env.APPPORT}`);
});

module.exports = app;

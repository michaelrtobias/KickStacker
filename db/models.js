const { Sequelize, DataTypes } = require('sequelize');
const db = require('./index.js');

const Shoe = db.define('shoes', {
  name: {
    type: DataTypes.String,
    allowNull: false
  },
  styleCode: {
    type: DataTypes.String,
    allowNull: false
  },
  color: {
    type: DataTypes.String,
    allowNull: false
  },
 size: {
   type: DataTypes.Int,
   allowNull: false
 },
 boxStatus: {
   type: DataTypes.boolean,
   allowNull: false
 },
 imageURL: {
   type: DataTypes.String,
   allowNull: true
 },
 wears: {
   type: DataTypes.Int,
   allowNull: false,
   defaultValue: 0
 },
 purchasePrice: {
   type: DataTypes.Int,
   allowNull: true,
   defaultValue: 0
 },
 description: {
   type: DataTypes.String,
   allowNull: true
 },
 nickname: {
   type: DataTypes.String,
   allowNull: true
 }
})

const User = db.define('users', {
  firstName: {
    type: DataTypes.String,
    allowNull: false
  },
  lastName: {
    type: DataTypes.String,
    allowNull: false
  }
})

const Brand = db.define('brands', {
  name: {
    type: DataTypes.String,
    allowNull: false
  }
})

const Type = db.define('types', {
  name: {
    type: DataTypes.String,
    allowNull: false
  }
})

const Collection = db.define('collections', {
  name: {
    type: DataTypes.String,
    allowNull: false
  }
})

const Model = db.define('models', {
  name: {
    type: DataTypes.String,
    allowNull: false
  }
})

const Cut = db.define('cuts', {
  cut: {
    type: DataTypes.String,
    allowNull: false
  }
})

Shoe.sync()

User.sync()

Brand.sync()

Type.sync()

Collection.sync()

Model.sync()

Cut.sync()

module.exports = Shoe;
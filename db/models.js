const { Sequelize, DataTypes } = require('sequelize');
const db = require('./index.js');

const Shoe = db.define('shoes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  styleCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
 size: {
   type: DataTypes.INTEGER,
   allowNull: false
 },
 boxStatus: {
   type: DataTypes.BOOLEAN,
   allowNull: false
 },
 imageURL: {
   type: DataTypes.STRING,
   allowNull: true
 },
 wears: {
   type: DataTypes.INTEGER,
   allowNull: false,
   defaultValue: 0
 },
 purchasePrice: {
   type: DataTypes.INTEGER,
   allowNull: true,
   defaultValue: 0
 },
 description: {
   type: DataTypes.STRING,
   allowNull: true
 },
 receipt: {
   type: DataTypes.BOOLEAN,
   allowNull: false
 },
 nickname: {
   type: DataTypes.STRING,
   allowNull: true
 }
})

const User = db.define('users', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

const Brand = db.define('brands', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

const Type = db.define('types', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

const Collection = db.define('collections', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

const Model = db.define('models', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

const Cut = db.define('cuts', {
  cut: {
    type: DataTypes.STRING,
    allowNull: false
  }
})



Shoe.sync({ alter: true })

User.sync({ alter: true })

Brand.sync({ alter: true })

Type.sync({ alter: true })

Collection.sync({ alter: true })

Model.sync({ alter: true })

Cut.sync({ alter: true })


module.exports =  {User, Brand, Type, Collection, Model, Cut, Shoe};
'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: {
      type: Sequelize.STRING,
      allowNull: false
      } //verify cannot be null
  //image: Sequelize.image//probably should have a stock photo
})

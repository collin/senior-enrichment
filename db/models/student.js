'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      isUnique: true,
      allowNull: false,
      validate: {
          isEmail: true
      }
    }
    //maybe add an image for student too.
}

)

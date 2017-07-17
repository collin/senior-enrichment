'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Student;

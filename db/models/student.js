'use strict';
const Sequelize = require('sequelize');
const db =  require('../index');
const Campus =  require('./campus');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})

Campus.hasMany(Student)
Student.belongsTo(Campus)

module.exports = Student;

'use strict';
const Sequelize = require('sequelize');
const db =  require('../index');
const Campus =  require('./campus');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

Campus.hasMany(Student)
Student.belongsTo(Campus) //----> Adds 'campusId' to Student

module.exports = Student;

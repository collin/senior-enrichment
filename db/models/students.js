'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

var Students = db.define('students', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  campusId: Sequelize.INTEGER
})

Students.findOrCreate( {where: {name: 'Anne Marie King', email: 'amking23@gmail.com', campusId: 6}})
Students.findOrCreate( {where: {name: 'Andy King', email: 'andykingFU@gmail.com', campusId: 1}})
Students.findOrCreate( {where: {name: 'Amy King', email: 'amy@gmail.com', campusId: 2}})
Students.findOrCreate( {where: {name: 'Eric King', email: 'EJKinger@gmail.com', campusId: 5}})
Students.findOrCreate( {where: {name: 'Emerol King', email: 'SirEmerol@gmail.com', campusId: 5}})
Students.findOrCreate( {where: {name: 'Jarett Bruner', email: 'JB@gmail.com', campusId: 5}})
Students.findOrCreate( {where: {name: 'Cameron Saum', email: 'Camera@gmail.com', campusId: 1}})
Students.findOrCreate( {where: {name: 'Megan Kasarda', email: 'BIIGMegs@gmail.com', campusId: 2}})
Students.findOrCreate( {where: {name: 'PJ Strobel', email: 'Peej@gmail.com', campusId: 6}})
Students.findOrCreate( {where: {name: 'Emily Krutz', email: 'Emily@Emily.com', campusId: 6}})
Students.findOrCreate( {where: {name: 'Timmy Riggins', email: 'BigRigs@gmail.com', campusId: 1}})
Students.findOrCreate( {where: {name: 'Katherine Pierce', email: 'KaterinaP@gmail.com', campusId: 6}})
Students.findOrCreate( {where: {name: 'Hester Notenboom', email: 'HNotenboom@gmail.com', campusId: 5}})
Students.findOrCreate( {where: {name: 'Bobby Kelly', email: 'BK@gmail.com', campusId: 6}})
Students.findOrCreate( {where: {name: 'Darren Spensieren', email: 'Darryl@gmail.com', campusId: 1}})
Students.findOrCreate( {where: {name: 'Doug Stockton', email: 'DougieFreshe@gmail.com', campusId: 2}})
Students.findOrCreate( {where: {name: 'Chandler Bing', email: 'Binger@gmail.com', campusId: 6}})


module.exports = Students;
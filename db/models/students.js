'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

var Students = db.define('students', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
})

Students.findOrCreate( {where: {name: 'Anne Marie King', email: 'amking23@gmail.com'}})
Students.findOrCreate( {where: {name: 'Andy King', email: 'andykingFU@gmail.com'}})
Students.findOrCreate( {where: {name: 'Amy King', email: 'amy@gmail.com'}})
Students.findOrCreate( {where: {name: 'Eric King', email: 'EJKinger@gmail.com'}})
Students.findOrCreate( {where: {name: 'Emerol King', email: 'SirEmerol@gmail.com'}})
Students.findOrCreate( {where: {name: 'Jarett Bruner', email: 'JB@gmail.com'}})
Students.findOrCreate( {where: {name: 'Cameron Saum', email: 'Camera@gmail.com'}})
Students.findOrCreate( {where: {name: 'Megan Kasarda', email: 'BIIGMegs@gmail.com'}})
Students.findOrCreate( {where: {name: 'PJ Strobel', email: 'Peej@gmail.com'}})
Students.findOrCreate( {where: {name: 'Emily Krutz', email: 'Emily@Emily.com'}})
Students.findOrCreate( {where: {name: 'Timmy Riggins', email: 'BigRigs@gmail.com'}})
Students.findOrCreate( {where: {name: 'Katherine Pierce', email: 'KaterinaP@gmail.com'}})
Students.findOrCreate( {where: {name: 'Hester Notenboom', email: 'HNotenboom@gmail.com'}})
Students.findOrCreate( {where: {name: 'Bobby Kelly', email: 'BK@gmail.com'}})
Students.findOrCreate( {where: {name: 'Darren Spensieren', email: 'Darryl@gmail.com'}})
Students.findOrCreate( {where: {name: 'Doug Stockton', email: 'DougieFreshe@gmail.com'}})
Students.findOrCreate( {where: {name: 'Chandler Bing', email: 'Binger@gmail.com'}})


module.exports = Students;
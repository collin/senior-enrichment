'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


const Campus = db.define('campus', {
  name: {
   type: Sequelize.STRING,
   allowNull: false,
   validate: {
     notEmpty: true
   }
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
}, {
  hooks: {
    beforeValidate: function(inst) {
      if (!inst.imageUrl) inst.imageUrl = 'https://pixy.org/images/placeholder.png'
    }
  }
})

module.exports = Campus;

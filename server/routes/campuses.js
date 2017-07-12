const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Campus = models.Campus;

module.exports = router;


//route  = /Campuses will get all campuses from the DB
router.get('/', function(req, res, next) {
  res.send('You hit the campuses route!')
  // Campus.findAll({where: req.query})
  // .then(campuses => res.json(campuses))
  // .catch(next);
})

//GET A SINGLE CAMPUS BY ID
.get('/:campusId', function(req, res, next) {
  res.send('You hit the route for a specific  campus!')
})

//CREATE A CAMPUS
.post('/', function(req, res, next) {
  res.send('Created a campus!')
})

//UPDATE CAMPUS INFO
.put('/:campusId', function(req, res, next) {
  res.send('Updated campus info!')
})

//DELETE A CAMPUS
.delete('/', function(req, res, next) {
  res.send('Deleted a campus!')
})

'use strict'
const api = require('express').Router()
const db = require('../db')
const Students = require('../db/models/students')
const Campuses = require('../db/models/campuses')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

//STUDENTS
api.get('/students', function(req, res, next) {
  Students.findAll()
  .then(function(students){
    res.json(students)
  })
  .catch(next)
})

api.get('/students/:studentId', function(req, res, next) {
  Students.findById(req.params.studentId)
  .then(function(student){
    res.json(student)
  })
  .catch(next)
})

api.get('/campuses', function(req, res, next) {
  Campuses.findAll()
  .then(function(campuses){
    res.json(campuses)
  })
  .catch(next)
})

api.get('/campuses/:campusId', function(req, res, next) {
  let campusId = +req.params.campusId
  Students.findAll({where: {campusId: req.params.campusId}})
  .then(function(students){
    res.json(students)
  })
  .catch(next)
})




module.exports = api
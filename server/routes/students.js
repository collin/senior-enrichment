const express = require('express');
const router = express.Router();
const models = require('../../db/models');
const Student = models.Student;

module.exports = router;


//route  = /Students will get all students from the DB
router.get('/', function(req, res, next) {
  res.send('You hit the students route!')
  // Student.findAll({where: req.query})
  // .then(students => res.json(students))
  // .catch(next);
})

//GET A SINGLE STUDENT BY ID
.get('/:studentId', function(req, res, next) {
  res.send('You hit the route for a single student!')
})

//CREATE A STUDENT PROFILE
.post('/', function(req, res, next) {
  res.send('Created a student profile!')
})

//UPDATE A STUDENT PROFILE
.put('/:studentId', function(req, res, next) {
  res.send('Updated a student profile!')
})

//DELETE A STUDENT PROFILE
.delete('/', function(req, res, next) {
  res.send('Deleted a student profile!')
})


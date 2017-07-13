'use strict'
const studentRouter = require('express').Router()
const { Student, Campus} = require('../db/models');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
studentRouter.get('/', (req, res, next) => {
	Student.findAll()
	.then(students => res.json(students))
	.catch(next);
})

studentRouter.param('studentId', (req, res, next, studentId) => {
	Student.findById(studentId)
	.then(student => {
		if (!student) next(new Error('Student not found'));
		req.student = student;
		next();
	})
	.catch(next);
})

studentRouter.get('/:studentId', (req, res, next) => {
	res.json(req.student);
});

studentRouter.post('/:studentId', (req, res, next) => {
	// student = req.student;
});

studentRouter.put('/:studentId', (req, res, next) => {
	res.send({hello: 'this is the /students/:id put route'})
});

studentRouter.delete('/:studentId', (req, res, next) => {
	res.send({hello: 'this is the /students/:id delete route'})
});


module.exports = studentRouter;

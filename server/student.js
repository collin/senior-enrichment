'use strict'
const studentRouter = require('express').Router()
const { Student, Campus} = require('../db/models');

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

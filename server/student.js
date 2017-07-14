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

studentRouter.post('/', (req, res, next) => {
	Student.create({name: req.body.name})
	.then((newStudent) => {
		return newStudent.setCampus(+req.body.campusId)
	})
	.then(studentWithCampus => {
		res.json(studentWithCampus);
	})
	.catch(next);
});

studentRouter.put('/:studentId', (req, res, next) => {
	req.student.update({name: req.body.name})
	.then(student => {
		return student.setCampus(+req.body.campusId)
	})
	.then(studentWithCampus => {
		res.json(studentWithCampus);
	})
	.catch(next)
});

studentRouter.delete('/:studentId', (req, res, next) => {
	const idToDelete = req.student.id;
	req.student.destroy()
	.then(deletedStudent => {
		res.json(idToDelete);
	})
	.catch(next);
});


module.exports = studentRouter;

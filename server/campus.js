'use strict'
const campusRouter = require('express').Router()
const { Student, Campus } = require('../db/models');

campusRouter.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
})

campusRouter.param('campusId', (req, res, next, campusId) => {
	Campus.findById(campusId)
	.then(campus => {
		if (!campus) next(new Error('campus not found'));
		req.campus = campus;
		next();
	})
	.catch(next);
})

campusRouter.get('/:campusId', (req, res, next) => {
  res.json(req.campus);
})

campusRouter.post('/:campusId', (req, res, next) => {
	// campus = req.campus;
});

campusRouter.put('/:campusId', (req, res, next) => {
	res.send({hello: 'this is the /campuss/:id put route'})
});

campusRouter.delete('/:campusId', (req, res, next) => {
	res.send({hello: 'this is the /campuss/:id delete route'})
});

module.exports = campusRouter;

'use strict'
const campusRouter = require('express').Router()
const { Campus } = require('../db/models');

campusRouter.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
})

campusRouter.param('campusId', (req, res, next, campusId) => {
	Campus.findById(campusId)
	.then(campus => {
		if (!campus) {
			next(new Error('Campus not found'));
		} else {
			req.campus = campus;
			next();
		}
	})
	.catch(next);
})

campusRouter.get('/:campusId', (req, res, next) => {
  res.json(req.campus);
})

campusRouter.post('/', (req, res, next) => {
	Campus.create(req.body)
	.then(campus => res.json(campus))
	.catch(next);
});

campusRouter.put('/:campusId', (req, res, next) => {
	const {name} = req.body
	req.campus.update({name})
	.then(campus => res.json(campus))
	.catch(next);
});

campusRouter.delete('/:campusId', (req, res, next) => {
	const idToDelete = req.campus.id;
	req.campus.destroy()
	.then(() => {
		res.json(idToDelete);
	})
	.catch(next);
});

module.exports = campusRouter;

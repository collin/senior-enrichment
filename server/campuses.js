const router = require('express').Router();
const { Student, Campus }=require('../db/models');
module.exports = router;

//GET
//api/campuses
router.get('/', function (req, res, next){
    Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next)
})

//api/campuses/id
router.get('/:id', function (req, res, next){
    const id = req.params.id
    Campus.findOne({ where: { id }})
    .then(campus => res.json(campus))
    .catch(next)
})

//POST

//api/campuses
router.post('/', function (req, res, next){
    Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next)
})

//PUT

//api/campuses/id
router.post('/:id', function (req, res, next){
    const id = req.params.id
    Campus.findOne({ where: { id }})
    .then(campus => {
        campus.update(res.body)
    })
    .catch(next)
})
//DELETE

//api/campuses/id
router.delete('/:id', function (req, res, next) {
    console.log(req.params.id)
    const id = req.params.id;
    Campus.destroy({ where: { id }})
    .then(() => res.status(204).end())
    .catch(next)
})

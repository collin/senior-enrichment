const router = require('express').Router();
const { Student, Campus }=require('../db/models');
module.exports = router;


//GET

// /api/students
router.get('/', function (req, res, next){
    Student.findAll()
    .then(students => res.json(students))
    .catch(next)
})

// /api/students/id
router.get('/:id', function (req, res, next){
    const id = req.params.id
    Campus.findOne({ where: { id }})
    .then(campus => res.json(campus))
    .catch(next)
})


// POST

// api/students/

router.post('/', function (req, res, next){
    Student.create(req.body)
    .then(student => res.json(student))
    .catch(next)
})

//PUT

// api/students/id
router.post('/:id', function (req, res, next){
    const id = req.params.id
    Student.findOne({ where: { id }})
    .then(student => {
        student.update(res.body)
    })
    .catch(next)
})
//DELETE

// api/students/id
router.delete('/:id', function (req, res, next) {
    const id = req.params.id;
    Student.destroy({ where: { id }})
    .then(() => res.status(204).end())
    .catch(next)
})

const db = require('./index.js')
const { Student, Campus } = require('./models')

console.log(db.didSync)

db.didSync
  .then(() => {
    const fullstackProm = Campus.create({
      name: 'Fullstack',
    })
    const MacalesterProm = Campus.create({
      name: 'Macalester',
    })
    return Promise.all([fullstackProm, MacalesterProm])
  })
  .then(([Fullstack, Macalester]) => {
    Student.create({
      name: 'Willy',
    })
    .then(student => student.setCampus(Macalester))

    Student.create({
      name: 'Brian',
    })
    .then(student => student.setCampus(Fullstack))

    Student.create({
      name: 'Alex',
    })
    .then(student => student.setCampus(Macalester))

    Student.create({
      name: 'Nick',
    })
    .then(student => student.setCampus(Fullstack))

    Student.create({
      name: 'Connie',
    })
    .then(student => student.setCampus(Macalester))
  })

module.exports = {};

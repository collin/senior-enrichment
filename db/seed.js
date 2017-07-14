const db = require('./index.js')
const { Student, Campus } = require('./models')

db.didSync
  .then(() => {
    const fullstackProm = Campus.create({
      name: 'Fullstack',
      imageUrl: 'https://pbs.twimg.com/profile_images/694191024416112642/VtJUhbKk.png',
    })
    const MacalesterProm = Campus.create({
      name: 'Macalester',
      imageUrl: 'https://pbs.twimg.com/profile_images/798867067231354880/4p5iaRIZ.jpg',
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

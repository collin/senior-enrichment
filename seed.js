const db = require('./db')
const Campus = require('./db/models/campus')
const Student = require('./db/models/student')

const campuses = [
    {name: 'earth'},
    {name: 'mars'},
    {name: 'andromeda'},
    {name: 'Omichron-Persei III'}
]

const students = [
    {name: 'Bob', email: 'bob@bob.com', campusId: 1},
    {name: 'Joe', email: 'joe@joe.com', campusId: 1},
    {name: 'Jan', email: 'jan@jan.com', campusId: 3},
    {name: 'Mat', email: 'mat@mat.com', campusId: 2},
    {name: 'Pat', email: 'pat@pat.com', campusId: 4},
    {name: 'Tim', email: 'tim@tim.com', campusId: 3},
    {name: 'Mia', email: 'mia@mia.com', campusId: 2},
    {name: 'Neo', email: 'neo@neo.com', campusId: 2},
    {name: 'Bilbo', email: 'lotr@mtdoom.gov', campusId: 4},
    {name: 'Ted', email: 'ted@ted.com', campusId: 1},
    {name: 'Nick', email: 'nick@nick.com', campusId: 2},
    {name: 'Connie', email: 'connie@connie.com', campusId: 4},
]

const seed = () =>
    Promise.all(campuses.map(campus =>
    Campus.create(campus)))
    .then(() =>
    Promise.all(students.map(student =>
    Student.create(student)))
)

const main = () => {
  seed()
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();

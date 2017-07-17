// const db = require('./server/db');
// const Student = require('./server/db/models/student');
// const Campus = require('./server/db/models/campus');

// const campuses = [
//   { name: 'really_random' },
//   { name: 'generally_speaking' },
//   { name: 'dogs_of_fullstack' },
//   { name: 'lunch_planning' }
// ];

// const students = [{
//   name: 'Cody',
//   email: 
// }, {
//   name: 'Ben',
//   email: 
// }, {
//   name: 'Star',
//   email: 
// }, {
//   name: 'Batman',
//   email: 
// }, {
//   name: 'Elliott',
//   email:   
// }, {
//   name: 'Fira',
//   image: '/images/fira.jpg'
// }, {
//   name: 'Henry',
//   image: '/images/henry.jpg'
// }, {
//   name: 'Marcy',
//   image: '/images/marcy.jpg'
// }, {
//   name: 'Milton',
//   image: '/images/milton.jpg'
// }, {
//   name: 'Murphy',
//   image: '/images/murphy.jpg'
// }, {
//   name: 'Raffi',
//   image: '/images/raffi.jpg'
// }, {
//   name: 'Tulsi',
//   image: '/images/tulsi.jpg'
// }, {
//   name: 'Pork Chop',
//   image: '/images/pork_chop.jpg'
// }, {
//   name: 'Ribs',
//   image: '/images/ribs.jpg'
// }, {
//   name: 'Stacey',
//   image: '/images/stacey.jpg'
// }, {
//   name: 'JD',
//   image: '/images/jd.jpg'
// }, {
//   name: 'BenBen',
//   image: '/images/benben.png'
// }, {
//   name: 'Odie',
//   image: '/images/odie.jpg'
// }];

// const id = () => Math.round(Math.random() * (authors.length - 1)) + 1;

// const seed = () =>
//   Promise.all(authors.map(author =>
//     Author.create(author))
//   )
//   .then(() =>
//   Promise.all(channels.map(channel =>
//     Channel.create(channel))
//   ))
//   .then(() =>
//   Promise.all(messages.map(message =>
//     Message.create(message))
//   )
// );

// const main = () => {
//   console.log('Syncing db...');
//   db.sync({ force: true })
//     .then(() => {
//       console.log('Seeding databse...');
//       return seed();
//     })
//     .catch(err => {
//       console.log('Error while seeding');
//       console.log(err.stack);
//     })
//     .then(() => {
//       db.close();
//       return null;
//     });
// };

// main();

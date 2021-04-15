/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/' + 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
  console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/



// const newVampire1 = new Vampire({
//   name: 'Chocula',
//   title: 'Count',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['cereal', 'marshmallows'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 2
// });


// const newVampire2 = new Vampire({
//   name: 'Dracula',
//   dob: new Date(937, 0, 24, 13, 0),
//   hair_color: 'brown',
//   eye_color: 'blue',
//   loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
//   location: 'Transylvania, Romania',
//   gender: 'm',
//   victims: 1238
// });


// const newVampire3 = new Vampire({
//   name: 'Elizabeth Bathory ',
//   dob: new Date(1560, 8, 7, 22, 10),
//   hair_color: 'brown',
//   eye_color: 'brown',
//   loves: ['virgin blood', 'fancy cloaks', 'frilly collars'],
//   location: 'Nyírbátor, Hungary',
//   gender: 'f',
//   victims: 980
// });


// const newVampire4 = new Vampire({
//   name: 'Claudia',
//   dob: new Date(1793, 2, 7, 8, 30),
//   hair_color: 'blonde',
//   eye_color: 'blue',
//   loves: ['doll babies', 'ribbons', 'appearing innocent', '  trickery'],
//   location: 'New Orleans, Louisiana, US',
//   gender: 'f',
//   victims: 290
// });

// newVampire1.save().then(doc => {
//   console.log('Saved vampire: ', doc);
// }, e => {
//   console.log('Something went wrong :(', e);
// })




// newVampire2.save().then(doc => {
//   console.log('Saved vampire: ', doc);
// }, e => {
//   console.log('Something went wrong :(', e);
// })
// newVampire3.save().then(doc => {
//   console.log('Saved vampire: ', doc);
// }, e => {
//   console.log('Something went wrong :(', e);
// })
// newVampire4.save().then(doc => {
//   console.log('Saved vampire: ', doc);
// }, e => {
//   console.log('Something went wrong :(', e);
// })
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('added provided vampire data', vampires);
//   mongoose.connection.close();
// });



// Model.find(query, fields, options, callback)

// fields and options can be omitted



//Find all the vampires that that are females
// Vampire.find({ gender: 'f' }, (error, result) => {
//   if (error) {
//     console.log(error)
//   }
//   else {
//     console.log(result)
//   }
// })


//have greater than 500 victims
// Vampire.find({ victims: { $gt: 500 } }, (error, result) => {
//   if (error) {
//     console.log(error)
//   }
//   else {
//     console.log(result)
//   }
// })


//have fewer than or equal to 150 victims
// Vampire.find({ victims: { $lte: 150 } }, (error, result) => {
//   if (error) {
//     console.log(error)
//   }
//   else {
//     console.log(result)
//   }
// })


// Vampire.count()
//have a victim count is not equal to 210234
// Vampire.find({victims: {$ne: 210234} }, (error, result) => {
//   if (error) {
//     console.log(error)
//   }
//   else {
//     console.log(result)
//   }
// })


//have greater than 150 AND fewer than 500 victims
//  Vampire.find( { $and: [ { victims: { $gte: 150 } }, { victims: { $lt: 500 } } ] }, (error, result) => {
//     if (error) {
//       console.log(error)
//     }
//     else {
//       console.log(result)
//     }
//   }) 



//Select by exists or does not exist
//1-have a key of 'title'
// Vampire.find( { 'title': { $exists:true } }, (error, result) => {
//       if (error) {
//         console.log(error)
//       }
//       else {
//         console.log(result)
//       }
//     }) 


//2-do not have a key of 'victims'
// Vampire.find( { 'victims': { $exists:false } }, (error, result) => {
//       if (error) {
//         console.log(error)
//       }
//       else {
//         console.log(result)
//       }
//     }) 



//3- have a title AND no victims
//  Vampire.find( { $and: [ { 'title': { $exists:true } }, { 'victims': { $exists:false } } ] }, (error, result) => {
//     if (error) {
//       console.log(error)
//     }
//     else {
//       console.log(result)
//     }
//   }) 

// // 4-have victims AND the victims they have are greater than 1000
//  Vampire.find( { $and: [ { 'title': { $exists:true } }, { victims: { $gt: 1000 } } ] }, (error, result) => {
//     if (error) {
//       console.log(error)
//     }
//     else {
//       console.log(result)
//     }
//   }) 


//Select with OR
//1-are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find( { $or: [ { location:  'New York, New York, US '  }, {  location:  'New Orleans, Louisiana, US'   }] }, (error, result) => {
//       if (error) {
//         console.log(error)
//       }
//       else {
//         console.log(result)
//       }
//     })  


//2-love brooding or being tragic
// Vampire.find( { $or: [ { loves:  'brooding '  }, {  loves:  'being tragic'   }] }, (error, result) => {
//       if (error) {
//         console.log(error)
//       }
//       else {
//         console.log(result)
//       }
//     })  


//3-have more than 1000 victims or love marshmallows

// Vampire.find( { $or: [ { loves:  'marshmallows '  },{ victims: { $gt: 1000 } }] }, (error, result) => {
//       if (error) {
//         console.log(error)
//       }
//       else {
//         console.log(result)
//       }
//     })  


//4-have red hair or green eyes
// Vampire.find( { $or: [ {  hair_color:  'red '  },{  eye_color: 'green' }] }, (error, result) => {
//       if (error) {
//         console.log(error)
//       }
//       else {
//         console.log(result)
//       }
//     }) 


// Select objects that match one of several values
//1-love either frilly shirtsleeves or frilly collars
// Vampire.find({loves: {$in: ['frilly shirtsleeves', 'frilly collars']}}, (error, result) => {
//         if (error) {
//           console.log(error)
//         }
//         else {
//           console.log(result)
//         }
//       }) 



//2-love brooding
// Vampire.find({loves: {$in: ['brooding']}}, (error, result) => {
//         if (error) {
//           console.log(error)
//         }
//         else {
//           console.log(result)
//         }
//       }) 












//Negative Selection
//1-love ribbons but do not have brown eyes
// Vampire.find({loves: {$in: ['ribbons']}} ,{  eye_color: { $not: 'brown' } }, (error, result) => {
//         if (error) {
//           console.log(error)
//         }
//         else {
//           console.log(result)
//         }
//       }) 

//2-are not from Rome
// Vampire.find( { location: { $not: 'Rome' } }, (error, result) => {
//           if (error) {
//             console.log(error)
//           }
//           else {
//             console.log(result)
//           }
//         })  

//3-do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find( { loves: { $not: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding] } }, (error, result) => {
//           if (error) {
//             console.log(error)
//           }
//           else {
//             console.log(result)
//           }
//         })  


//4-have not killed more than 200 people
// Vampire.find({ victims: { $not: { $gt: 200 } } }, (error, result) => {
//   if (error) {
//     console.log(error)
//   }
//   else {
//     console.log(result)
//   }
// })  


//Replace
//1-replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.replaceOne( { "name" : "Claudia" }, { "name" : "Eve", "portrayed_by" : "Tilda Swinton" }, (error, result) => {
//     if (error) {
//       console.log(error)
//     }
//     else {
//       console.log(result)
//     }
//   })  


//2-replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.replaceOne( {name :"Count Chocula"}, { "name" : "Guy Man", "is_actually" : "were-lizard" }, (error, result) => {
//     if (error) {
//       console.log(error)
//     }
//     else {
//       console.log(result)
//     }
//   })  



//Update
//1-Update 'Guy Man' to have a gender of 'f'
// Vampire.updateOne({name :"Guy Man"},{gender : "f" }, (error, result) => {
//       if (error) {
//         console.log(error)
//       }
//       else {
//         console.log(result)
//       }
//     })  

//2-Update 'Eve' to have a gender of 'm'
// Vampire.updateOne({name :"Eve"},{gender : "m" }, (error, result) => {
//       if (error) {
//         console.log(error)
//       }
//       else {
//         console.log(result)
//       }
//     })  

//3-Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.updateOne({name :"Guy Man"},{hates : ['clothes','jobs'] }, (error, result) => {
//       if (error) {
//         console.log(error)
//       }
//       else {
//         console.log(result)
//       }
//     })  

//4-Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.updateOne({name :"Guy Man"},{hates : ['clothes','jobs','alarm clocks','jackalopes'] }, (error, result) => {
//       if (error) {
//         console.log(error)
//       }
//       else {
//         console.log(result)
//       }
//     })  


//5-Rename 'Eve's' name field to 'moniker'
// Vampire.updateOne({name :"Eve"},{name:"moniker" }, (error, result) => {
//       if (error) {
//         console.log(error)
//       }
//       else {
//         console.log(result)
//       }
//     })  


//We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
// Vampire.updateOne({gender :"f"},{gender:"fems" }, (error, result) => {
//       if (error) {
//         console.log(error)
//       }
//       else {
//         console.log(result)
//       }
//     })  


//Remove
//1-Remove a single document wherein the hair_color is 'brown'
// Vampire.remove({hair_color:'brown'}, (error, result) => {
//         if (error) {
//           console.log(error)
//         }
//         else {
//           console.log(result)
//         }
//       }) 

//2-We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
// Vampire.remove({eye_color:'blue'}, (error, result) => {
//         if (error) {
//           console.log(error)
//         }
//         else {
//           console.log(result)
//         }
//       }) 












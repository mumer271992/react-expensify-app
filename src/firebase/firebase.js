import * as firebase from 'firebase';
import { DataSnapshot } from '@firebase/database/dist/esm/src/api/DataSnapshot';

var config = {
    apiKey: "AIzaSyA2CAEE2XsN7XwNyyLbzEQM4TeIk6UbJOI",
    authDomain: "expensify-6057b.firebaseapp.com",
    databaseURL: "https://expensify-6057b.firebaseio.com",
    projectId: "expensify-6057b",
    storageBucket: "expensify-6057b.appspot.com",
    messagingSenderId: "27511198421"
};

firebase.initializeApp(config);
const database = firebase.database();

export {firebase, database as default};
// database.ref('expenses').on('child_removed', (dataSnapshot) => {
//     console.log(dataSnapshot.key, " ", dataSnapshot.val());
// });
// database.ref('expenses').on('child_changed', (dataSnapshot)=> {
//     console.log(dataSnapshot.key, " ", dataSnapshot.val());
// });
// database.ref('expenses').on('value', (dataSnapshot) => {
//     const expenses = [];
//     console.log(dataSnapshot.val());
//     dataSnapshot.forEach((childDataSnapshot)=> {
//         expenses.push({
//             id: childDataSnapshot.key,
//             ...childDataSnapshot.val()
//         })
//     })
//     console.log(expenses);
// });
// database.ref('expenses').push({
//     descriptoin: 'This is a test 2 description',
//     note: 'This is a test 2 note.',
//     amount: 1400,
//     createAt: 10
// });
// database.ref().on('value', (dataSnapshot) => {
//     const data = dataSnapshot.val();
//     const name = data.name ? data.name : 'Anonymous';
//     const jobTitle = data.job && data.job.title ? data.job.title : 'Software Engineer';
//     const company = data.job && data.job.company ? data.job.company : 'Google';
//     console.log(`${name} is a ${jobTitle} at ${company}`);
// });
// database.ref().set({
//     name: "Muhammad Umer",
//     age: 25,
//     isSingle: true,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Islamabad',
//         country: 'Pakistan'
//     }
// }).then(() => {
//     console.log("Data saved!");
// }).catch((error) => {
//     console.log("Some Error: ",error);
// });
// database.ref().update({
//     'job/company': 'Amazon'
// }).then(()=> {
//     console.log("data updated");
// }).catch((error) => {
//     console.log("Error in update: ", error);
// });

// database.ref('attributes').remove().then(() => {
//     console.log("Attributes removed!");
// }).catch((error) => {
//     console.log("Some Error: ",error);
// });

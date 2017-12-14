///
// Object Destructuring
///

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


///
// Arra y Destructuring
///

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, smallCupCost, mediumCupCost, largeCupCost , extraLarge = '$3.00'] = item;

console.log(`A medium ${itemName} costs ${extraLarge}.`);
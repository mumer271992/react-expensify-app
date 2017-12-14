// Arguments -- object id no longer bound with arrow functions
const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(55, 1));

// this -- keyword is no longer bound with arrow functions

const user = {
    name: 'Muhammad Umer',
    cities: ['Islamabad', 'Gujranawala'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
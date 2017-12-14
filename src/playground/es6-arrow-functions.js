function getFirstName(full_name){
    return full_name.split(' ')[0];
};

console.log(getFirstName('Muhammad Umer'));

const getFirstNameArrowFunction = (full_name) => full_name.split(' ')[0];

console.log(getFirstNameArrowFunction('Muhammad Umer'));
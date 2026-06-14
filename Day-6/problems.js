// Destructure and Rename
const user = {
    firstName: "Sara",
    lastName: "Khan",
    age: 25
};

const {firstName: name, lastName, age} = user

console.log(`name = ${name}, last name = ${lastName}, age = ${age}`);


// Merge Arrays with Spread

function mergeArrays(arr1, arr2, arr3){
    return [...arr1, ...arr2, ...arr3];
}
const a = [1, 2];
const b = [3, 4];
const c = [5];

console.log(mergeArrays(a, b, c));

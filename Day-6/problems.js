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

// Problem 28: Promise Chain  [Medium]
// Description: Write a function delay(ms) that returns a Promise that resolves after ms milliseconds. Then chain two delays: first 1 second, then 2 seconds, logging a message after each.
// Example:
// delay(1000).then(() => { console.log('1 sec'); return delay(2000); }).then(() => console.log('3 sec total'));
// Hint: Use new Promise with setTimeout inside.

function delay(ms){
    return new Promise((resolve) =>
    setTimeout(resolve, ms));
}

delay(1000)
    .then(() => { 
        console.log('1 sec'); 
        return delay(2000); 
    })
    .then(() => 
        console.log('3 sec total'));


// Problem 29: Async/Await Fetch Simulation  [Medium]
// Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
// Example:
// await getUserData(1);// returns {id:1, name:'Test User'}
// Hint: Use async/await with a Promise that wraps setTimeout.

async function getUserData(id){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve({id:id, name: "Test User"});
        }, 500)
    });
}

async function showUser() {
    const data = await getUserData(1);
    console.log(data)
}

showUser();

// Problem 30: Optional Chaining & Nullish Coalescing  [Easy]
// Description: Given a nested object that may have missing properties, safely access a deeply nested value using optional chaining (?.) and provide a default using nullish coalescing (??).
// Example:
// const user = {profile: null};const city = user?.profile?.address?.city ?? 'Unknown';// Output: 'Unknown'
// Hint: Chain ?. for each level; use ?? for the fallback.

const userData  = {
    profile: {
        address: {
            city : "Dhaka"
        }
    }
}

const city = userData?.profile?.address?.city ?? "Unknown";
console.log(city);


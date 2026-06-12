// count object properties
function countProperties(obj){
    return Object.keys(obj).length;
}


const result = { a:1, b:2, c:3 };
console.log(result);

// merge two object
function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}

console.log(mergeObjects({a:1}, {b:2}));

// Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.

function fizzBuzz(n){
    for(let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if ( i % 3 === 0){
            console.log("Fizz");
        }
        else if ( i % 5 === 0){
            console.log("Buzz");
        }
        else {
            console.log(i)
        }

    }
}

fizzBuzz(15);

// Invert an Object

function invertObject(obj){
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {})
};

console.log(invertObject({a: 1, b: 2}));

//  Find Duplicate Values in Array of Objects

function findDuplicateNames(arr) {
    const frequency = {};

    for ( const person of arr ){
        frequency[person.name] = (frequency[person.name] || 0) +1;
    }
    const duplicates = [];

    for( const name in frequency){
        if(frequency[name] > 1) {
            duplicates.push(name);
        }
    }
    return duplicates;
}

console.log(
    findDuplicateNames([
         { name: "Ali" },
        { name: "Sara" },
        { name: "Ali" }
    ])
)
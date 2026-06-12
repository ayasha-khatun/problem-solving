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



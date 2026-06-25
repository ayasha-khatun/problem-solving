// Problem 41: Two Sum  [Easy]
// Description: Given an array of numbers and a target, write a function twoSum(arr, target) that returns the indices of the two numbers that add up to the target.
// Example:
// Input: [2, 7, 11, 15], target = 9Output: [0, 1]  (because 2 + 7 = 9)
// Hint: Use a hash map to store visited values and their indices.

function twoSum(arr, target) {
    const map = {};

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }

        map[arr[i]] = i;
    }

    return [];
}

const arr = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(arr, target));


// Problem 42: Check Anagram  [Easy]
// Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
// Example:
// Input: 'listen', 'silent'  → Output: trueInput: 'hello', 'world'   → Output: false
// Hint: Sort both strings and compare, or use a character frequency map.
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const count = {};

    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));   
console.log(isAnagram("race", "care"));     
console.log(isAnagram("rat", "car"));       


// Problem 43: Find Missing Number  [Easy]
// Description: Given an array of n-1 integers from 1 to n with one number missing, write a function findMissing(arr, n) to find the missing number.
// Example:
// Input: [1,2,4,5], n=5  → Output: 3
// Hint: Use the formula: expected sum = n*(n+1)/2, then subtract actual sum.


function findMissing(arr, n) {
    // Expected sum from 1 to n
    const expectedSum = (n * (n + 1)) / 2;

    // Actual sum of array
    let actualSum = 0;

    for (let num of arr) {
        actualSum += num;
    }

    // Missing number
    return expectedSum - actualSum;
}

// Test Cases
console.log(findMissing([1, 2, 4, 5], 5));     
console.log(findMissing([2, 3, 4, 5], 5));    
console.log(findMissing([1, 2, 3, 5], 5));      
console.log(findMissing([1, 3, 4, 5, 6], 6));   
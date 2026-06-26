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


// Problem 44: Valid Parentheses  [Medium]
// Description: Write a function isValidParentheses(str) that returns true if the string has valid, balanced parentheses, brackets, and braces.
// Example:
// Input: '()[]{}'  → Output: trueInput: '([)]'    → Output: false
// Hint: Use a stack (array). Push opening brackets, pop and compare for closing ones.

function isValidParentheses(str) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("([)]"));
console.log(isValidParentheses("{[]}"));
console.log(isValidParentheses("((("));
console.log(isValidParentheses(""));


// Problem 45: Binary Search  [Medium]
// Description: Write a function binarySearch(arr, target) that searches a sorted array and returns the index of the target, or -1 if not found.
// Example:
// Input: [1,3,5,7,9], target=7  → Output: 3
// Hint: Use left and right pointers; check the middle element each iteration.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // মাঝের index বের করা
    let mid = Math.floor((left + right) / 2);

    // target পাওয়া গেলে index return
    if (arr[mid] === target) {
      return mid;
    }

    // target বড় হলে ডান পাশে search
    if (arr[mid] < target) {
      left = mid + 1;
    }
    // target ছোট হলে বাম পাশে search
    else {
      right = mid - 1;
    }
  }

  // target না পাওয়া গেলে
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7)); 
console.log(binarySearch([1, 3, 5, 7, 9], 5)); 
console.log(binarySearch([1, 3, 5, 7, 9], 1)); 
console.log(binarySearch([1, 3, 5, 7, 9], 9)); 
console.log(binarySearch([1, 3, 5, 7, 9], 8)); 

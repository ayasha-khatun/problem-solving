// Problem 46: Count Words in a Sentence  [Easy]
// Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
// Example:
// Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
// Hint: Split by spaces, then reduce into a frequency object.

function wordCount(sentence) {
  const words = sentence.split(" ");

  const result = {};

  for (let word of words) {
    result[word] = (result[word] || 0) + 1;
  }

  return result;
}

console.log(wordCount("the cat sat on the mat"));
console.log(wordCount("hello hello world"));
console.log(wordCount("javascript is fun javascript"));

// Problem 47: Longest Word in a Sentence  [Easy]
// Description: Write a function longestWord(sentence) that returns the longest word in a sentence. If there's a tie, return the first one.
// Example:
// Input: 'The quick brown fox'Output: 'quick'
// Hint: Split the sentence and use reduce() to track the longest.

function longestWord(sentence) {
  const words = sentence.split(" ");

  const longest = words.reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length
      ? currentWord
      : longestWord;
  });

  return longest;
}

console.log(longestWord("The quick brown fox")); 
console.log(longestWord("I love JavaScript programming"));
console.log(longestWord("cat dog elephant tiger"));
console.log(longestWord("one two six ten"));

// Problem 48: Rotate an Array  [Medium]
// Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
// Example:
// Input: [1,2,3,4,5], k=2Output: [4,5,1,2,3]
// Hint: Use slice and concat, or reverse the whole array then parts.

function rotateArray(arr, k) {
  const n = arr.length;

  k = k % n;

  return arr.slice(-k).concat(arr.slice(0, n - k));
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3, 4, 5], 1));
console.log(rotateArray([1, 2, 3, 4, 5], 7));


// Problem 49: Roman to Integer  [Medium]
// Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
// Example:
// Input: 'III'   → Output: 3Input: 'IX'    → Output: 9Input: 'LVIII' → Output: 58
// Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it.

function romanToInt(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = roman[s[i]];
    const next = roman[s[i + 1]];

    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

// Test Cases
console.log(romanToInt("III"));  
console.log(romanToInt("IX"));      
console.log(romanToInt("LVIII"));   
console.log(romanToInt("MCMXCIV")); 

// Problem 50: Pascal's Triangle Row  [Medium]
// Description: Write a function pascalRow(n) that returns the nth row of Pascal's Triangle as an array.
// Example:
// Input: 0  → Output: [1]Input: 3  → Output: [1,3,3,1]Input: 4  → Output: [1,4,6,4,1]
// Hint: Each element is the sum of the two elements above it from the previous row.

function pascalRow(n) {
  let row = [1];

  for (let i = 1; i <= n; i++) {
    let newRow = [1];

    for (let j = 1; j < row.length; j++) {
      newRow.push(row[j - 1] + row[j]);
    }

    newRow.push(1);
    row = newRow;
  }

  return row;
}

console.log(pascalRow(0)); 
console.log(pascalRow(1)); 
console.log(pascalRow(2)); 
console.log(pascalRow(3)); 
console.log(pascalRow(4)); 
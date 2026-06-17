// Debounce Function
function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Function to be debounced
function search(query) {
  console.log(`Searching for: ${query}`);
}

function search(query) {
  console.log("Searching:", query);
}

const debouncedSearch = debounce(search, 300);

// Simulating rapid user typing
debouncedSearch("H");
debouncedSearch("He");
debouncedSearch("Hel");
debouncedSearch("Hell");
debouncedSearch("Hello");

// 
// Throttle Function
function throttle(fn, limit) {
  let lastCallTime = 0;

  return function (...args) {
    const now = Date.now();

    // Execute only if enough time has passed
    if (now - lastCallTime >= limit) {
      lastCallTime = now;
      fn.apply(this, args);
    }
  };
}

// Function to be throttled
function onScroll() {
  console.log("Scroll event fired at:", new Date().toLocaleTimeString());
}

// Create throttled version
const throttledScroll = throttle(onScroll, 200);

// Simulate rapid scroll events every 50ms
const interval = setInterval(() => {
  throttledScroll();
}, 50);

// Stop simulation after 2 seconds
setTimeout(() => {
  clearInterval(interval);
  console.log("Simulation stopped.");
}, 2000);


// 
// Deep Clone Function
function deepClone(obj) {
  // Handle primitive values and null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    const clonedArray = [];

    for (let i = 0; i < obj.length; i++) {
      clonedArray[i] = deepClone(obj[i]);
    }

    return clonedArray;
  }

  // Handle objects
  const clonedObject = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObject[key] = deepClone(obj[key]);
    }
  }

  return clonedObject;
}

// Test Case 1
const a = {
  x: {
    y: 1
  }
};

const b = deepClone(a);

b.x.y = 99;

console.log("Original:", a); // { x: { y: 1 } }
console.log("Cloned:", b);   // { x: { y: 99 } }
console.log(a.x.y);          // 1
console.log(b.x.y);          // 99

// Test Case 2
const person = {
  name: "Ayasha",
  age: 22,
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  },
  skills: ["JavaScript", "React", "Node.js"]
};

const copiedPerson = deepClone(person);

// Modify cloned object
copiedPerson.address.city = "Chittagong";
copiedPerson.skills.push("MongoDB");

console.log("\nOriginal Person:");
console.log(person);

console.log("\nCopied Person:");
console.log(copiedPerson);

// 
// EventEmitter Class
class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Register a listener
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(listener);
  }

  // Emit an event
  emit(event, ...args) {
    if (!this.events[event]) {
      return;
    }

    this.events[event].forEach((listener) => {
      listener(...args);
    });
  }

  // Remove a listener
  off(event, listenerToRemove) {
    if (!this.events[event]) {
      return;
    }

    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );
  }
}

const emitter = new EventEmitter();

// Listener functions
function greet(name) {
  console.log("Hello " + name);
}

function welcome(name) {
  console.log("Welcome " + name);
}

// Register listeners
emitter.on("greet", greet);
emitter.on("greet", welcome);

// Emit event
emitter.emit("greet", "Sara");

// Remove one listener
emitter.off("greet", greet);

console.log("\nAfter removing greet listener:\n");

// Emit again
emitter.emit("greet", "Sara");

// 

// Problem 35: Implement Array.prototype.map from Scratch  [Medium]
// Description: Write a function myMap(arr, callback) that replicates the behavior of Array.prototype.map without using the built-in map().
// Example:
// myMap([1,2,3], x => x * 2);// Output: [2, 4, 6]
// Hint: Loop through the array, apply the callback to each element, push results to a new array.

// Custom map function
function myMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

// Example 1
const numbers = [1, 2, 3];

const doubled = myMap(numbers, (x) => x * 2);

console.log(doubled); // [2, 4, 6]

// Example 2
const squared = myMap(numbers, (x) => x * x);

console.log(squared); // [1, 4, 9]

// Example 3
const users = ["Sara", "John", "Mike"];

const greetings = myMap(users, (name) => `Hello ${name}`);

console.log(greetings);
// ["Hello Sara", "Hello John", "Hello Mike"]


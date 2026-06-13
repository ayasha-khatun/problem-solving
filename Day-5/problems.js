// Factorial (Recursive)
function factorial(n) {

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5)); 
console.log(factorial(0)); 

// Fibonacci Sequence

function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

console.log(fibonacci(6))

// Create a Counter with Closure 
function makeCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
    },

    getCount() {
      return count;
    }
  };
}

const c = makeCounter();

c.increment();
c.increment();

console.log(c.getCount());


//  Curry a Function
function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

const add = curry((a, b) => a + b);

console.log(add(2)(3));

// Memoize a Function


function memoize(fn) {
  const cache = {};

  return function (arg) {
    if (arg in cache) {
      return cache[arg];
    }

    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const memoAdd = memoize(n => n + 10);

console.log(memoAdd(5));
console.log(memoAdd(5)); 

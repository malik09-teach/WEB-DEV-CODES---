/* arrow fun*/

const detail =(x,y)=>{

    console.log("i am the master of the :",x);
console.log("currrently working on ",y);   
}


detail("ai","QUNT ML")



// Regular function
function add(a, b) {
    return a + b;
}

// Function expression
const subtract = function(a, b) {
    return a - b;
};

// Arrow function with implicit return
const multiply = (a, b) => a * b;

// Arrow function with explicit return
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Higher-order function (accepts another function as parameter)
const calculate = (num1, num2, operation) => {
    return operation(num1, num2);
};

// Callback function
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

// Recursive function
const factorial = (n) => {
    return n <= 1 ? 1 : n * factorial(n - 1);
};

// ADVANCED: Closure function
const counter = () => {
    let count = 0;
    return () => ++count;
};

// ADVANCED: Currying function (returns a function that returns a function)
const curry = (a) => (b) => (c) => a + b + c;

// ADVANCED: Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE executed immediately");
})();

console.log(add(5, 3));
console.log(calculate(10, 2, multiply));
console.log(factorial(5));
const counter1 = counter();
console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(curry(2)(3)(4)); // 9

// ADVANCED: Memoization (caches function results)
const memoize = (fn) => {
    const cache = {};
    return (x) => cache[x] !== undefined ? cache[x] : (cache[x] = fn(x));
};

const expensive = memoize((n) => {
    console.log("Computing...");
    return n * n;
});

console.log(expensive(5)); // Computing... 25
console.log(expensive(5)); // 25 (cached)

// ADVANCED: Debounce function (delays execution)
const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

// ADVANCED: Throttle function (limits execution frequency)
const throttle = (fn, interval) => {
    let lastCall = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            fn(...args);
        }
    };
};

// ADVANCED: Compose function (chains functions)
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const composed = compose(multiplyByThree, addTwo);
console.log(composed(5)); // (5 + 2) * 3 = 21

// recursiive  



function rec (x){

if (x==0||x==1)
   return 1;

return x*rec(x-1);
}

var num=5;

var recur= rec(num);

console.log("recursion is of:"+ num+" is:"+recur);

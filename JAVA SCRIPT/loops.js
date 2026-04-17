// ============================================
// FOR LOOP
// ============================================

// Simple for loop
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration: " + i);
}

// For loop with condition
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log("Even number: " + i);
    }
}

// Nested for loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("i=" + i + ", j=" + j);
    }
}

// ============================================
// FOR...IN LOOP (iterates over object keys)
// ============================================

const person = { name: "John", age: 30, city: "NYC" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// For...in with condition
for (let key in person) {
    if (key === "age") {
        console.log("Age found: " + person[key]);
    }
}

// ============================================
// FOR...OF LOOP (iterates over array values)
// ============================================

const fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
    console.log("Fruit: " + fruit);
}

// For...of with condition
for (let fruit of fruits) {
    if (fruit.length > 5) {
        console.log("Long name: " + fruit);
    }
}

// Nested for...of
const matrix = [["a", "b"], ["c", "d"]];
for (let row of matrix) {
    for (let item of row) {
        console.log("Item: " + item);
    }
}

// ============================================
// WHILE LOOP
// ============================================

let count = 0;
while (count < 5) {
    console.log("While loop: " + count);
    count++;
}

// While with condition
let num = 1;
while (num <= 10) {
    if (num % 2 === 0) {
        console.log("Even: " + num);
    }
    num++;
}

// Nested while loop
let i = 1;
while (i <= 3) {
    let j = 1;
    while (j <= 2) {
        console.log("i=" + i + ", j=" + j);
        j++;
    }
    i++;
}

// ============================================
// DO...WHILE LOOP
// ============================================

let x = 0;
do {
    console.log("Do-while loop: " + x);
    x++;
} while (x < 5);

// Do...while with condition
let y = 1;
do {
    if (y % 3 === 0) {
        console.log("Divisible by 3: " + y);
    }
    y++;
} while (y <= 10);

// Nested do...while
let a = 1;
do {
    let b = 1;
    do {
        console.log("a=" + a + ", b=" + b);
        b++;
    } while (b <= 2);
    a++;
} while (a <= 2);



var name = "abbas"


for (const i of name){

    console.log(i);
    
}

// Ari
let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

// Assignment Operators
let x = 20;
x += 5;  // x = x + 5
x -= 3;  // x = x - 3
x *= 2;  // x = x * 2
x /= 4;  // x = x / 4

// Conditional Statements
if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
} else if (a === b) {
    console.log("a is equal to b");
} else {
    console.log("condition not met");
}

// Conditional Operators (Ternary)
let result = (a > b) ? "a is greater" : "b is greater";
console.log(result);

// Bitwise Operators
let num1 = 5;    // 0101
let num2 = 3;    // 0011
console.log(num1 & num2);   // AND = 1 (0001)
console.log(num1 | num2);   // OR = 7 (0111)
console.log(num1 ^ num2);   // XOR = 6 (0110)
console.log(~num1);         // NOT = -6
console.log(num1 << 1);     // Left Shift = 10
console.log(num1 >> 1);     // Right Shift = 2 (divides by 2)
console.log(num1 >>> 1);    // Unsigned Right Shift = 2 (fills with 0s from left)


/**
 * Arithmetic Operators
 * Performs basic mathematical operations on numeric values
  a - First operand, value 10
  b - Second operand, value 5
  sum - Result of addition (a + b = 15)
  difference - Result of subtraction (a - b = 5)
  product - Result of multiplication (a * b = 50)
  quotient - Result of division (a / b = 2)
  remainder - Result of modulo operation (a % b = 0)
 */

/**
 * Assignment Operators
 * Assigns values and performs operations in a single step
 *  x - Initial value 20
 * x += 5 adds 5 to x and assigns the result (x becomes 25)
 * x -= 3 subtracts 3 from x and assigns the result (x becomes 22)
 * x *= 2 multiplies x by 2 and assigns the result (x becomes 44)
 * x /= 4 divides x by 4 and assigns the result (x becomes 11)
 */

/**
 * Conditional Statements
 * Evaluates multiple conditions and executes corresponding code blocks
 *  Logs appropriate message based on condition
 */

/**
 * Ternary/Conditional Operator
 * Shorthand if-else statement for simple conditional assignments
 *result - Stores "a is greater" if (a > b) is true, otherwise "b is greater"
 *  Comparison result between a and b
 */

/**
 * Bitwise Operators
 * Performs operations on binary representations of numbers
 *  num1 - Binary value 0101 (decimal 5)
 *  num2 - Binary value 0011 (decimal 3)
 *  num1 & num2 - AND operation results in 0001 (decimal 1)
 *  num1 | num2 - OR operation results in 0111 (decimal 7)
 *  num1 ^ num2 - XOR operation results in 0110 (decimal 6)
 *  ~num1 - NOT operation inverts all bits, results in -6
 *  num1 << 1 - Left Shift by 1 position multiplies by 2, results in 10
 *  num1 >> 1 - Right Shift by 1 position divides by 2, results in 2
 *  num1 >>> 1 - Unsigned Right Shift fills with 0s from left, results in 2
 */
/**
 * A Faulty Calculator Function
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @param {string} operator - The math operator (+, -, *, /)
 * @returns {number} The calculated result (sometimes wrong!)
 */
function faultyCalculator(a, b, operator) {
  
  // 1. Set the probability of failure. 
  // Math.random() generates a number between 0 and 1. 
  // If it's less than 0.2, the calculator will be faulty (20% of the time).
  const isFaulty = Math.random() < 0.2;

  // 2. Define how the operators get swapped when it breaks
  const faultyOperators = {
    "+": "-",  // Addition becomes Subtraction
    "-": "/",  // Subtraction becomes Division
    "*": "+",  // Multiplication becomes Addition
    "/": "**"  // Division becomes Exponentiation
  };

  // 3. Check if we should use the faulty logic
  if (isFaulty) {
    console.warn("Oops! The calculator malfunctioned...");
    // Overwrite the original operator with the faulty one
    operator = faultyOperators[operator];
  }

  // 4. Perform the actual calculation
  let result;
  
  if (operator === "+") {
    result = a + b;
  } 
  else if (operator === "-") {
    result = a - b;
  } 
  else if (operator === "*") {
    result = a * b;
  } 
  else if (operator === "/") {
    // Prevent dividing by zero
    if (b === 0) {
      return "Error: Cannot divide by zero!";
    }
    result = a / b;
  } 
  else if (operator === "**") {
    result = a ** b;
  } 
  else {
    return "Error: Invalid Operator";
  }

  return result;
}

// --- TEST CASES TO RUN IN YOUR CONSOLE ---

console.log("Calculating 10 + 5...");
console.log(faultyCalculator(10, 5, "+")); 
// Usually 15, but sometimes 5 (because + becomes -)

console.log("Calculating 10 * 5...");
console.log(faultyCalculator(10, 5, "*")); 
// Usually 50, but sometimes 15 (because * becomes +)
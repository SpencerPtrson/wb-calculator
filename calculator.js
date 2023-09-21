// STUDENT FUNCTIONS

function add(input1, input2) {
  return input1 + input2;
}

function subtract(input1, input2) {
  return input1 - input2;
}

function multiply(input1, input2) {
  return input1 * input2;
}

function divide(input1, input2) {
  return input1 / input2;
}

function power(input1, input2) {
  return input1 ** input2;
}

function modulus(input1, input2) {
  return input1 % input2;
}

function sqrt(input) {
  return Math.sqrt(input);
}

function factorial(input) {
  result = input
  // result = 5

  for (let i = 2; i < input; i++) {
    console.log(`${result} * ${i}`)
    result = result * i;
  }

  return result;
}

function calculate(expression) {
  expression = expression.trim();

  // Turn the given expression into an array
  // set variables to array values
  const tokens = expression.split(' ');
  let num1;
  let operator;
  let num2;
  
  // if there's two arguments, it's a sqrt operation
  if (tokens.length === 2) {
    operator = tokens[0];
    num1 = +tokens[1];

    if (Number.isNaN(num1)) {
      alert("Not a number! Try again.");
      return;
    }
  }
  else if (tokens.length === 3) { // if there are three arguments, it's a normal expression
    num1 = +tokens[0];
    operator = tokens[1];
    num2 = +tokens[2];

    if(Number.isNaN(num1) || Number.isNaN(num2)) {
      alert("Not a number! Try again.");
      return;
    }
  }
  else {
    alert("Invalid Expression! Try again.");
    return;
  }

  // do a mathematical operation depending on the operator
  switch(operator) {
    case ('+') :
      return add(num1, num2);
    case ('-') :
      return subtract(num1, num2);
    case ('*') :
      return multiply(num1, num2);
    case ('/') :
      return divide(num1, num2);
    case ('^') :
      return power(num1, num2);
    case ('%') :
      return modulus(num1, num2);
    case ('sqrt') :
      return sqrt(num1);
    default:
      alert("That operator is not supported.");
      break;
  }
}


/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
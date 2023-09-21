// STUDENT FUNCTIONS

function add(input1, input2) {
  if (!sanitizeInput(input1, input2)) {
    return "AAAAAA";
  }

  return input1 + input2;
}

function subtract(input1, input2) {
  sanitizeInput(input1, input2);

  return input1 - input2;
}

function multiply(input1, input2) {
  sanitizeInput(input1, input2);

  return input1 * input2;

}

function divide(input1, input2) {
  sanitizeInput(input1, input2);

  return input1 / input2;
}

function power(input1, input2) {
  sanitizeInput(input1, input2);

  return input1 ** input2;
}

function modulus(input1, input2) {
  sanitizeInput(input1, input2);

  return input1 % input2;
}

function sqrt(input) {
  if (!+input) {
    return "Invalid Input"
  }
  
  return Math.sqrt(input);

}

// Check if both inputs are numbers
function sanitizeInput(input1, input2) {
  inputNum1 = +input1;
  inputNum2 = +input2;

  if(!inputNum1) {
    console.log("Input Invalid");
    return false;
  }
  else {
    console.log("Input Valid");
    return true;
  }
}



function calculate(expression) {}

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

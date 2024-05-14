let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("result").value = currentNumber;
}

function appendOperator(op) {
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("result").value = "";
}

function calculate() {
  let result = 0;
  if (operator === "+") {
    result = parseFloat(previousNumber) + parseFloat(currentNumber);
  } else if (operator === "-") {
    result = parseFloat(previousNumber) - parseFloat(currentNumber);
  } else if (operator === "*") {
    result = parseFloat(previousNumber) * parseFloat(currentNumber);
  } else if (operator === "/") {
        // Handle division by zero
        if (currentNumber === "0") {
          alert("Error: Division by zero!");
          return; // Exit the function if division by zero
        }
        result = parseFloat(previousNumber) / parseFloat(currentNumber);
      }
      previousNumber = result.toString();
      currentNumber = "";
      operator = "";
      document.getElementById("result").value = result;
 }

  
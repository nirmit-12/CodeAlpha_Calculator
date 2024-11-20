let currentInput = '';
let operatorUsed = false;

// Append numbers to the display
function appendNumber(number) {
  currentInput += number.toString();
  updateDisplay();
}

// Append an operator
function appendOperator(operator) {
  if (operatorUsed || currentInput === '') return;
  currentInput += ` ${operator} `;
  operatorUsed = true;
  updateDisplay();
}

// Append a decimal
function appendDecimal() {
  if (currentInput.includes('.')) return;
  currentInput += '.';
  updateDisplay();
}

// Clear the display
function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

// Delete the last digit or operator
function deleteDigit() {
  currentInput = currentInput.trim().slice(0, -1);
  if (!currentInput.includes(' ')) operatorUsed = false;
  updateDisplay();
}

// Calculate the result
function calculateResult() {
  try {
    const sanitizedInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
    const result = eval(sanitizedInput);
    currentInput = result.toString();
    operatorUsed = false;
    updateDisplay();
  } catch {
    currentInput = 'Error';
    updateDisplay();
  }
}

// Update the calculator display
function updateDisplay() {
  const display = document.getElementById('result');
  display.textContent = currentInput || '0';
}

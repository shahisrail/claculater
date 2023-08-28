let degMode = true;
let memory = 0;
let lastAnswer = 0;

const resultInput = document.getElementById('result');

function appendToResult(value) {
  resultInput.value += value;
}

function clearResult() {
  resultInput.value = '';
}

function evaluateResult() {
  try {
    let expression = resultInput.value;
    expression = expression.replace(/sin/g, 'Math.sin');
    expression = expression.replace(/cos/g, 'Math.cos');
    expression = expression.replace(/tan/g, 'Math.tan');
    expression = expression.replace(/sin-1/g, 'Math.asin');
    expression = expression.replace(/cos-1/g, 'Math.acos');
    expression = expression.replace(/tan-1/g, 'Math.atan');
    expression = expression.replace(/log/g, 'Math.log10');
    if (!degMode) {
      expression = expression.replace(/deg/g, 'rad');
      expression = expression.replace(/π/g, 'Math.PI');
    }
    resultInput.value = eval(expression);
    lastAnswer = resultInput.value;
  } catch (error) {
    resultInput.value = 'Error';
  }
}

function backspace() {
  resultInput.value = resultInput.value.slice(0, -1);
}

function switchDegRad() {
  degMode = !degMode;
  if (degMode) {
    document.getElementById('result').value += ' deg';
  } else {
    document.getElementById('result').value += ' rad';
  }
}

function factorial() {
  const n = parseInt(resultInput.value);
  if (n >= 0) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    resultInput.value = result;
  } else {
    resultInput.value = 'Error';
  }
}

function memoryAdd() {
  memory += parseFloat(resultInput.value);
}

function memorySubtract() {
  memory -= parseFloat(resultInput.value);
}

function memoryRecall() {
  resultInput.value = memory;
}

function toggleSign() {
  resultInput.value = -1 * parseFloat(resultInput.value);
}

function randomNumber() {
  resultInput.value = Math.random();
}

function scientificNotation() {
  resultInput.value = parseFloat(resultInput.value).toExponential();
}

function answer() {
  resultInput.value = lastAnswer;
}
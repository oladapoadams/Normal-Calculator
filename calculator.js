function calculateResult(operation) {
    // Get the container (optional, in case you want to do something with it)
    let con = document.querySelector('.container');
  
    // Get input values and parse them as integers
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
  
    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid input numbers");
        return;
    }
  
    let result;
  
    // Perform the appropriate calculation based on the operation
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 === 0) {
            alert("Cannot divide by zero");
            return;
        }
        result = num1 / num2;
    }
  
    // Display the result in the span with id="result"
    let resultSpan = document.getElementById('result');
    resultSpan.textContent = "Result: " + result;
  
    // Ensure the result span is visible
    resultSpan.style.display = 'block';
  }
  
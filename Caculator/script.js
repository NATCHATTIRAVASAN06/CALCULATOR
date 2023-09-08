let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        // Replace "x" with "*" for multiplication
        displayValue = displayValue.replace(/x/g, '*');
        // Replace "%" with "/100*" for modulus
        displayValue = displayValue.replace(/%/g, '/100*');
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = displayValue;
    }
}

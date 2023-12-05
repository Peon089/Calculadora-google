document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');

    let currentInput = '';
    let operator = '';
    let firstOperand = null;

    buttons.addEventListener('click', function(event) {
        const button = event.target;

        if (button.tagName === 'BUTTON') {
            const buttonText = button.textContent;

            if (!isNaN(parseFloat(buttonText)) || buttonText === '.') {
                currentInput += buttonText;
            } else if (buttonText === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = null;
            } else if (buttonText === '=') {
                if (currentInput !== '') {
                    const secondOperand = parseFloat(currentInput);
                    currentInput = operate(firstOperand, secondOperand, operator);
                    operator = '';
                    firstOperand = null;
                }
            } else {
                if (currentInput !== '') {
                    if (firstOperand === null) {
                        firstOperand = parseFloat(currentInput);
                        currentInput = '';
                        operator = buttonText;
                    } else {
                        const secondOperand = parseFloat(currentInput);
                        firstOperand = operate(firstOperand, secondOperand, operator);
                        currentInput = '';
                        operator = buttonText;
                    }
                }
            }

            display.textContent = currentInput;

        }
    });

    function operate(a, b, op) {
        switch (op) {
            case '+':
                 //metodo para adicionar registros
                db.collection('matematica').add({
                resultado: a+b
                })
                return a + b;
            case '-':
                db.collection('matematica').add({
                    resultado: a-b
                    })
                return a - b;
            case '*':
                db.collection('matematica').add({
                    resultado: a*b
                    })
                return a * b;
            case '/':
                db.collection('matematica').add({
                    resultado: a/b
                    })
                return a / b;
            default:
                db.collection('matematica').add({
                    resultado: b
                    })
                return b;
        }
    }
});
import { doc, setDoc } from "firebase/firestore"; 
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
                 const docRef = addDoc(collection(db, "matematica"), {
                    resultado: a+b
                  });
                  console.log("Document written with ID: ", docRef.id);
                return a + b;
            case '-':
                const docRef2 = addDoc(collection(db, "matematica"), {
                    resultado: a-b
                  });
                  console.log("Document written with ID: ", docRef2.id);
                return a - b;
            case '*':
                const docRef3 = addDoc(collection(db, "matematica"), {
                    resultado: a*b
                  });
                  console.log("Document written with ID: ", docRef3.id);
                return a * b;
            case '/':
                const docRef4 = addDoc(collection(db, "matematica"), {
                    resultado: a/b
                  });
                  console.log("Document written with ID: ", docRef4.id);
                return a / b;
            default:
                const docRef5 = addDoc(collection(db, "matematica"), {
                    resultado: b
                  });
                  console.log("Document written with ID: ", docRef5.id);
                return b;
        }
    }
});
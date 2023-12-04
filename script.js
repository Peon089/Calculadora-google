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
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    }
});

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCHKZAX60gMIZCKNX91Bm6zT9JwhxQck3o",
    authDomain: "caixa-de-texto.firebaseapp.com",
    projectId: "caixa-de-texto",
    storageBucket: "caixa-de-texto.appspot.com",
    messagingSenderId: "579508003626",
    appId: "1:579508003626:web:939477699a75f805603453",
    measurementId: "G-DM6RZDMWKE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
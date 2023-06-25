var digito = '';
let firstNumber;
let symbol;
let secondNumber;
let historicAnswer;
let finalAnswer;
let equal = false;

document.getElementById('space').value = digito;

//working
function clearNumber() {
    digito = '';
    firstNumber = undefined;
    symbol = undefined;
    secondNumber = undefined;
    document.getElementById('space').value = '';
    document.getElementById('historic').value = '';
}

//working
function addNumber(id) {
    digito = digito + document.getElementById(id).value;
    document.getElementById('space').value = digito;
    
    if (firstNumber === undefined) {
        document.getElementById('historic').value = digito;
    }
}

function addOperator(value) {
    symbol = value;

    //Se primeiro numero esta indefinido
    if (firstNumber === undefined) {
        firstNumber = digito;
        historicAnswer = firstNumber + ' ' + symbol;
        document.getElementById('historic').value = historicAnswer;
        digito = '';
    } else { 
        //Caso esteja ja definido, aloca o 2 numero
        secondNumber = digito;
        historicAnswer = firstNumber + ' ' + symbol;
        document.getElementById('historic').value = historicAnswer;
        digito = '';
        //agora sim, chama operate
        operate(); 
    }  
}

function result() {
    equal = true;
    
    secondNumber = digito;
    historicAnswer = firstNumber + ' ' + symbol;
    document.getElementById('historic').value = historicAnswer;
    digito = '';

    operate();
    document.getElementById('space').value = finalAnswer;
}

function operate () {
    switch (symbol) {
        case '+':
            finalAnswer = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
            break;
        case '-':
            finalAnswer = parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
            break;
        case '*':
            finalAnswer = parseInt(firstNumber, 10) * parseInt(secondNumber, 10);
            break;
        case '/':
            finalAnswer = parseInt(firstNumber, 10) / parseInt(secondNumber, 10);
            break;
    }

    document.getElementById('space').value = finalAnswer;

    if (equal === true) {
        historicAnswer = firstNumber + ' ' + symbol + ' ' + secondNumber + ' = ';
        document.getElementById('historic').value = historicAnswer;

    } else {
        historicAnswer = finalAnswer + ' ' + symbol + ' ';
        document.getElementById('historic').value = historicAnswer;
    } 

    firstNumber = finalAnswer;
    secondNumber = undefined;
    symbol = undefined;


    if (finalAnswer === Infinity) {
        document.getElementById('historic').value = 'ERROR! Try again with something possible';
    }

    equal=false;
}
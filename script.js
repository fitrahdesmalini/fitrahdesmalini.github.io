let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

// menampilkan angka ke screen
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) =>{
    calculatorScreen.value = number;
}

// ambil angka setiap yang .number diklik
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) =>{
    number.addEventListener("click", (e) =>{
        // input number sesuai value yang diklik
        inputNumber(e.target.value);

        // lempar angka itu ke fungsi menampilkan angka ke screen
        updateScreen(currentNumber);
    })
});

// buat terima semua input nomor. pake plus supaya bisa nambah beberapa angka
const inputNumber = (number) => {
    // mencegah nomor pertama dimulai dari 0
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

// ambil dari .operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) =>{
    operator.addEventListener("click", (e) =>{
        // console.log(e.target.value);
        inputOperator(e.target.value);
    })
});

const inputOperator = (operator) => {

    if (calculationOperator === '' || calculationOperator === '=' || calculationOperator === '-' || calculationOperator === '+' || calculationOperator === '*' || calculationOperator === '/') {
        prevNumber = currentNumber;
    }

    calculationOperator = operator;
    currentNumber = '0';
}

// calculate saat tekan =
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () =>{
    // console.log("= dipencet");
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result = '';

    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }

    currentNumber = result;
    calculationOperator = '';
};


//clear saat tombol AC di klik
const clear = document.querySelector(".all-clear");

clear.addEventListener("click", () =>{
    // console.log("clear")
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};


// buat desimal
const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (e) =>{
    // console.log(e.target.value);
    inputDecimal(e.target.value);
    updateScreen(currentNumber);
});

const inputDecimal = (titik) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += titik;
}

// percentage
const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", (e) =>{
    // console.log("%");
    calculatePercentage(e.target.value);
    updateScreen(currentNumber);
});

const calculatePercentage = (percentage) => {
    if(currentNumber.includes('%')){
        return
    }
    currentNumber = parseFloat(currentNumber) / 100;
}


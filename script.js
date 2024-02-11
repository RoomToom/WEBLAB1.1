function showLCMCalculator() {
    document.getElementById('content').innerHTML = `
        <h2>Find naibilshe spilne crante</h2>
        <input type="number" id="number1" placeholder="First num">
        <input type="number" id="number2" placeholder="Second num">
        <button onclick="calculateLCM()">Find the better one</button>
        <p id="result"></p>
    `;
}

function calculateLCM() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let lcm = findLCM(num1, num2);
    document.getElementById('result').innerText = `${lcm}`;
}

function findLCM(a, b) {
    function gcd(x, y) {
        return !y ? x : gcd(y, x % y);
    }
    return (a * b) / gcd(a, b);
}


function showNumberInputControl() {
    document.getElementById('content').innerHTML = `
        <h2>Контроль введення даних</h2>
        <input type="number" id="inputNumber" placeholder="Введіть число">
        <button onclick="checkNumber()">Перевірити число</button>
        <p id="checkResult"></p>
    `;
}

let enteredNumbers = [];

function checkNumber() {
    const num = document.getElementById('inputNumber').value;
    if (enteredNumbers.includes(num)) {
        document.getElementById('checkResult').innerText = `Число ${num} вже введено.`;
    } else {
        enteredNumbers.push(num);
        document.getElementById('checkResult').innerText = `Число ${num} прийнято.`;
    }
}

function showWordCount() {
    document.getElementById('content').innerHTML = `
        <h2>Обчислити кількість слів у тексті</h2>
        <textarea id="wordCountInput" placeholder="Введіть текст тут" rows="4" cols="50"></textarea>
        <button onclick="calculateWordCount()">Обчислити</button>
        <p id="wordCountResult"></p>
    `;
}

function calculateWordCount() {
    const text = document.getElementById('wordCountInput').value.trim();
    const words = text.split(/\s+/);
    const numberOfWords = words.length;

    if(text.length === 0) {
        document.getElementById('wordCountResult').innerText = "Ви не ввели текст.";
    } else {
        document.getElementById('wordCountResult').innerText = `Кількість слів: ${numberOfWords}.`;
    }
}

function toggleAuthorInfo() {
    var info = document.getElementById("authorInfo");
    if (info.style.display === "none" || !info.style.display) {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

let countScore = 0;
let Score = 0;

function opsChange(selectedRadio) {
    const result = document.getElementById("Ops");
    result.textContent = selectedRadio.value;
}

function randomNumber() {
    const result1 = document.getElementById("num1");
    const result2 = document.getElementById("num2");
    
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    result1.value = randomNumber1;
    result2.value = randomNumber2;

    const inputResult = document.getElementById("num3");
    inputResult.value = "";
}

function Start() {
    event.preventDefault();
    randomNumber();
    const resultText = document.getElementById("Result");
    resultText.innerHTML = "เช็คผลลัพธ์";
}

function Reload() {
    location.reload(true);
}

function Calc() {
    event.preventDefault();
    const inputNum1 = document.getElementById("num1");
    const inputNum2 = document.getElementById("num2");
    const inputNum3 = document.getElementById("num3");

    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);
    const num3 = parseFloat(inputNum3.value);

    const Ops = document.querySelector("input[name='choice']:checked").value;

    let result;
    switch (Ops) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
        case "÷":
            result = num1 / num2;
            break;
        default:
            result = "Error";
    }

    let checkResult
    const resultText = document.getElementById("Result");
    if (result == num3) {
        checkResult = true;
        resultText.innerHTML = "ถูกต้อง: &#9989;";
    } else {
        checkResult = false;
        resultText.innerHTML = "ไม่ถูกต้อง: &#10060;";
    }

    const showScore = document.getElementById("showScore");
    if (checkResult) {
        ++Score;
        ++countScore;
        showScore.innerHTML = "Score : " + Score + " / " + countScore;
    } else {
        ++countScore;
        showScore.innerHTML = "Score : " + Score + " / " + countScore;
    }

    randomNumber();
}

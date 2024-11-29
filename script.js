let factorlength;
function displayNumber() {
    const numberInput = document.getElementById("numberInput");
    const numberDisplay = document.getElementById("numberDisplay");
    numberDisplay.innerHTML = "<分析結果>";
    if (numberInput.value > 0 && numberInput.value < 1000000000000 && numberInput.value % 1 === 0) {
        //素数判定
        numberDisplay.appendChild(document.createElement("br"));
        if (isPrime(numberInput.value)) {
            numberDisplay.appendChild(document.createTextNode("素数:Yes"));
        } else {
            numberDisplay.appendChild(document.createTextNode("素数:No"))
        }
        // 素因数分解
        numberDisplay.appendChild(document.createElement("br"));
        const primeFactors = primeFactorize(numberInput.value);
        numberDisplay.appendChild(document.createTextNode("約数 (" + factorlength + ") :"));
        primeFactors.forEach(factor => {
            numberDisplay.appendChild(document.createTextNode(`${factor} `));
        });
        //平方数
        numberDisplay.appendChild(document.createElement("br"));
        if (isPerfectSquare(numberInput.value)) {
            numberDisplay.appendChild(document.createTextNode("平方数:Yes"));
        } else {
            numberDisplay.appendChild(document.createTextNode("平方数:No"));
        }
        //完全数
        numberDisplay.appendChild(document.createElement("br"));
        let temp = 0;
        for(let i = 0; i < primeFactors.length - 1; i++){
            temp += primeFactors[i]
        }
        if (temp == numberInput.value) {
            numberDisplay.appendChild(document.createTextNode("完全数:Yes"));
        } else {
            numberDisplay.appendChild(document.createTextNode("完全数:No"));
        }
    } else {
        numberDisplay.appendChild(document.createElement("br"));
        numberDisplay.appendChild(document.createTextNode("Error:有効な自然数を入力してください"))
    }
}
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function primeFactorize(num) {
    const factors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i);
            if (i !== num / i) {
                factors.push(num / i);
            }
        }
    }
    factorlength = factors.length;
    return factors.sort((a, b) => a - b);
}
function isPerfectSquare(num) {
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}
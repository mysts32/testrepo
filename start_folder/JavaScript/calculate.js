
// HTMLの要素を取得する
const val1Input = document.getElementById("value1");
const val2Input = document.getElementById("value2");
const operatorSelect = document.getElementById("choice");

const formulaArea = document.getElementById("formula");
const resultArea = document.getElementById("result");


// 入力内容が変更されたら計算する
val1Input.addEventListener("input", calculate);
val2Input.addEventListener("input", calculate);
operatorSelect.addEventListener("change", calculate);


// 計算処理
function calculate() {

    // 入力された値を取得する
    const val1 = val1Input.value;
    const val2 = val2Input.value;
    const operator = operatorSelect.value;


    // 値が入力されていない場合
    if (val1 === "" || val2 === "") {
        formulaArea.textContent = "";
        resultArea.textContent = "両方の数値を入力してください";
        return;
    }


    // 演算子が選択されていない場合
    if (operator === "") {
        formulaArea.textContent = "";
        resultArea.textContent = "演算子を選択してください";
        return;
    }


    // 文字列を数値に変換する
    const num1 = Number(val1);
    const num2 = Number(val2);


    // 計算結果と演算子の記号
    let result;
    let symbol;


    // 足し算
    if (operator === "addition") {
        result = num1 + num2;
        symbol = "+";
    }

    // 引き算
    else if (operator === "subtraction") {
        result = num1 - num2;
        symbol = "−";
    }

    // 掛け算
    else if (operator === "multiplication") {
        result = num1 * num2;
        symbol = "×";
    }

    // 割り算
    else if (operator === "division") {

        // 値2が0の場合
        if (num2 === 0) {
            formulaArea.textContent = "";
            resultArea.textContent = "0で割る事はできません。";
            return;
        }

        result = num1 / num2;
        symbol = "÷";
    }


    // 計算式を表示する
    formulaArea.textContent = `${num1} ${symbol} ${num2}`;

    // 計算結果を表示する
    resultArea.textContent = result;

}

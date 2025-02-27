
var num1 = "";
var operador;
var num2 = "";
var whole_operation = "";
var isSecondNumber = false;
var resultado = document.getElementById("resultado");
var botoes = document.getElementsByClassName("button");

function botaoPressionado(evento) {
    var id = evento.currentTarget.id;

    if (id == "C") {
        num1 = "";
        num2 = "";
        whole_operation = "";
        isSecondNumber = false;
        operador = null;
    } else if (!isNaN(id) || id == ".") {
        if (isSecondNumber) {
            num2 += id;
        } else {
            num1 += id;
        }
    } else if (id == "=") {
        var result = 0;
        var number1_int = Number(num1);
        var number2_int = Number(num2);

        switch (operador) {
            case "+":
                result = number1_int + number2_int;
                break;
            case "-":
                result = number1_int - number2_int;
                break;
            case "/":
                result = number1_int / number2_int;
                break;
            case "*":
                result = number1_int * number2_int;
                break;
            default:
                console.log("ERRO");
                break;
        }

        resultado.textContent = result;
        num1 = result.toString();
        num2 = "";
        isSecondNumber = false;
        operador = null;
    } else {
        isSecondNumber = true;
        operador = id;
    }

    whole_operation = num1 + (operador ? operador : "") + num2;
    resultado.textContent = whole_operation;
}

for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", botaoPressionado);
}
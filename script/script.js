function insert(num) {

    var numero = document.getElementById('resultado').innerHTML;

    if (numero.length < 8) {
        document.getElementById('resultado').innerHTML = numero + num;
    }
}

function clean() {

    document.getElementById('resultado').innerHTML = "";
}

function back() {

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calc() {

    var resultado = document.getElementById('resultado').innerHTML;

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado).toFixed(1);
    }
}

function change() {

    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(-numero);
}

function length() {

    var length = document.getElementById('resultado').innerHTML.length;
    console.log(length);
}


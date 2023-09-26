const element = document.getElementById('resultado');

function insert(num) {
    const textElement = element.textContent;

    if (textElement.length < 8) {
        element.textContent = textElement + num;
    }
}

function clean() {
    element.textContent = '';
}

function back() {
    element.textContent = element.textContent.substring(0, element.textContent.length - 1);
}

function calc() {
    var calc = element.textContent.replace('x', '*');
    calc = calc.replace('÷', '/');

    if (calc) {
        element.textContent = eval(calc).toFixed(2);
    }
}

function change() {
    element.textContent = eval(-element.textContent);
}

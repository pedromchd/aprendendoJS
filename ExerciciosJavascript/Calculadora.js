//CALCULADORA + - * /
var n1, n2, op;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação: + - * /');
n2 = parseFloat(prompt('Insira outro número'));
alert(eval(n1+op+n2));

//CALCULADORA + - * / ** rt %
var n, n1, n2, op;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação + - * / ** rt %');
if (op == '**' || op == 'rt') {
    n = parseInt(prompt('Insira o índice/expoente'));
    if (op == '**') {
        alert(n1**n);
    } else {
        alert(n1**(1/n));
    }
} else {
    n2 = parseFloat(prompt('Insira outro número'));
    alert(eval(n1+op+n2));
}

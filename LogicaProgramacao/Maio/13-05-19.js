//else if

//CALCULADORA + - * /
var n1, n2, op, res;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação: + - * /');
n2 = parseFloat(prompt('Insira outro número'));
if (oper == '+') {
    res = n1 + n2;
}
if (oper == '-') {
    res = n1 - n2;
}
if (oper == '*') {
    res = n1 * n2;
}
if (oper == '/') {
    res = n1 / n2;
}
alert(resul);


//CALCULADORA + - * /
var n1, n2, op;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação: + - * /');
n2 = parseFloat(prompt('Insira outro número'));
alert(eval(n1+op+n2));


//CALCULADORA + - * / ** rt %
var n, n1, n2, op, res;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação: + - * / ** rt %');
if (op == '**') {
    n = parseInt(prompt('Insira o expoente'));    
    res = n1**n;
} else if (op == 'rt') {
    n = parseInt(prompt('Insira o índice'));
    res = n1**(1/n)
} else {
    n2 = parseFloat(prompt('Insira outro número'));
}
if (op == '+') {
    res = n1 + n2;
}
if (op == '-') {
    res = n1 - n2;
}
if (op == '*') {
    res = n1 * n2;
}
if (op == '/') {
    res = n1 / n2;
}
if (op == '%') {
    res = n1 % n2;
}
alert(res);

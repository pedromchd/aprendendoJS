/**********
CALCULADORA
**********/

var n1, n2, op, res, a, p, t;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Operação [+] [-] [*] [/] [%] [!] [inv] [mul] [pos] [list] [raiz] [sort] [trunc]');

if (op == '+' || op == '-' || op == '*' || op == '/' || op == '%') {
  n2 = parseFloat(prompt('Insira n2'));
  res = eval(n1 + op + n2);
}

if (op == '**') {
  n2 = parseInt(prompt('Insira o expoente'));
  res = n1**n2;
}

if (op == 'raiz') {
  n2 = parseInt(prompt('Insira o índice'));
  res = n1**(1/n2);
}

if (op == 'trunc') {
  n2 = parseInt(prompt('Insira casas a truncar'));
  res = n1/(10**n2);
}

if (op == 'pos') {
  n2 = parseInt(prompt('Insira a posição'));
  n1 /= 10**n2;
  n1 -= parseInt(n1);
  res = parseInt(n1*10);
}

if (op == 'list') {
  n2 = parseInt(prompt('Insira a posição'));
  a = (n2-1+n1)%n1;
  p = (n2+1)%n1;
  res = a+' e '+p;
}

if (op == 'mul') {
  n2 = parseInt(prompt('Número de referência'));
  a = n1-1-(n1-1)%n2;
  p = n1+(n2-n1%n2);
  res = a+' e '+p;
}

if (op == 'sort') {
  res = Math.round(Math.random()*n1);
}

if (op == 'inv') {
  n2 = parseInt(prompt(n1 +'\nQuantidade de algarismos'));
  res = '';
  while (n2 > 0) {
    n2--;
    t = parseInt(n1 / 10**n2);
    n1 -= t * 10**n2;
    res = t + res;
  }
}

if (op == '!') {
  res = (n1 >= 0) ? 1: 'NaN';
  for (n1; n1>1; n1--) {
    res *= n1;
  }
}

alert(res);
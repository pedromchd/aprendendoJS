/*************
CALCULADORA v2
*************/

var n1, n2, op, res, a, p, t;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Operação [+] [-] [*] [/] [%] [!] [**] [inv] [mul] [pos] [list] [raiz] [sort] [trunc]');

function SoSuMuDiMo() {
  n2 = parseFloat(prompt('Insira n2'));
  res = eval(n1 + op + n2);
}

function Po() {
  n2 = parseInt(prompt('Insira o expoente'));
  res = n1**n2;
}

function raiz() {
  n2 = parseInt(prompt('Insira o índice'));
  res = n1**(1/n2);
}

function trunc() {
  n2 = parseInt(prompt('Insira casas a truncar'));
  res = n1/(10**n2);
}

function pos() {
  n2 = parseInt(prompt('Insira a posição'));
  n1 /= 10**n2;
  n1 -= parseInt(n1);
  res = parseInt(n1*10);
}

function list() {
  n2 = parseInt(prompt('Insira a posição'));
  a = (n2-1+n1)%n1;
  p = (n2+1)%n1;
  res = a+' e '+p;
}

function mul() {
  n2 = parseInt(prompt('Número de referência'));
  a = n1-1-(n1-1)%n2;
  p = n1+(n2-n1%n2);
  res = a+' e '+p;
}

function sort() {
  res = Math.round(Math.random()*n1);
}

function inv() {
  n2 = parseInt(prompt(n1 +'\nQuantidade de algarismos'));
  res = '';
  while (n2 > 0) {
    n2--;
    t = parseInt(n1 / 10**n2);
    n1 -= t * 10**n2;
    res = t + res;
  }
}

function fat() {
  res = (n1 >= 0) ? 1: 'NaN';
  for (n1; n1>1; n1--) {
    res *= n1;
  }
}

switch (op) {
  case '+', '-', '*', '/', '%':
    SoSuMuDiMo();
	break;
  case '**':
    Po();
	break;
  case 'raiz':
    raiz();
	break;
  case 'trunc':
    trunc();
	break;
  case 'pos':
    pos();
	break;
  case 'list':
    list();
	break;
  case 'mul':
    mul();
	break;
  case 'sort':
    sort();
	break;
  case 'inv':
    inv();
	break;
  case '!':
    fat();
	break;
}

alert(res);
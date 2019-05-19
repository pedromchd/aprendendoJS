/*************
CALCULADORA v2
*************/

var n1, n2, op, res, a, p, t;
n1 = parseFloat(prompt('Primeiro termo'));
op = prompt('Operação [+] [-] [*] [/] [%] [!] [**] [inv] [mul] [pos] [list] [raiz] [sort] [trunc]');

function SoSuMuDiMo(n2) {
  res = eval(n1 + op + n2);
}

function Po(n2) {
  res = n1**n2;
}

function raiz(n2) {
  res = n1**(1/n2);
}

function trunc(n2) {
  res = n1/(10**n2);
}

function pos(n2) {
  n1 /= 10**n2;
  n1 -= parseInt(n1);
  res = parseInt(n1*10);
}

function list(n2) {
  a = (n2-1+n1)%n1;
  p = (n2+1)%n1;
  res = a+' e '+p;
}

function mul(n2) {
  a = n1-1-(n1-1)%n2;
  p = n1+(n2-n1%n2);
  res = a+' e '+p;
}

function sort() {
  res = Math.round(Math.random()*n1);
}

function inv(n2) {
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

n2 = parseFloat(prompt(n1 +'  '+ op +'\nSegundo termo'));

switch (op) {
  case '+':
    SoSuMuDiMo(n2);
    break;
  case '-':
    SoSuMuDiMo(n2);
    break;
  case '*':
    SoSuMuDiMo(n2);
    break;
  case '/':
    SoSuMuDiMo(n2);
    break;
  case '%':
    SoSuMuDiMo(n2);
    break;
  case '**':
    Po(n2);
    break;
  case 'raiz':
    raiz(n2);
    break;
  case 'trunc':
    trunc(n2);
    break;
  case 'pos':
    pos(n2);
    break;
  case 'list':
    list(n2);
    break;
  case 'mul':
    mul(n2);
    break;
  case 'sort':
    sort();
    break;
  case 'inv':
    inv(n2);
    break;
  case '!':
    fat();
    break;
}

alert(n1 +' '+ op +' '+ n2 +' = '+ res);
console.log(n1, op, n2, res);

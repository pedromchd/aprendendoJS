//[+][-][*][/][%]
var n1, n2, op, res;
n1 = parseFloat(prompt('Insira n1'));
op = prompt('Operação [+][-][*][/][%]');
n2 = parseFloat(prompt('Insira n2'));
res = eval(n1 + op + n2);
alert(res);

//[**]
var num, exp, res;
num = parseFloat(prompt('Insira n1'));
exp = parseInt(prompt('Insira o expoente'));
res = num**exp;
alert(res);

//Raiz
var num, ind, res;
num = parseFloat(prompt('Insira n1'));
ind = parseInt(prompt('Insira o índice'));
res = num**(1/ind);
alert(res);

//Truncar
var num, cas, res
num = parseInt(prompt('Insira n1'));
cas = parseInt(prompt('Insira casas a truncar'));
res = num/(10**cas);
alert(res);

//Posição
var num, pos, res;
num = parseInt(prompt('Insira um número'));
pos = parseInt(prompt('Insira a posição'));
num /= 10**pos;
num -= parseInt(num);
res = parseInt(num*10);
alert(res);

//ListaCircular
var n1, n1, an, px, res;
n1 = parseInt(prompt('Insira o tamanho da lista'));
n2 = parseInt(prompt('Insira a posição'));
an = (n2-1+n1)%n1;
px = (n2+1)%n1;
res = an +' e '+ px;
alert(res);

//AnteriorPróximoMúltiplo
var num, ref, an, px, res;
num = parseInt(prompt('Insira n1'));
ref = parseInt(prompt('Número de referência'));
an = num - 1 - (num - 1)%ref;
px = num + (ref - num%ref);
res = an +' e '+ px;
alert(res);

//Sortear
var num, res;
num = parseInt(prompt('Números sorteados'));
res = Math.round(Math.random()*num);
alert(res);

//Inversão
var n1, al, t, res;
n1 = prompt('Insira um número');
al = n1.length;
n1 = parseInt(n1);
res = '';
while (al > 0) {
  al--;
  t = parseInt(n1 / 10**al);
  n1 -= t * 10**al;
  res = t + res;
}
alert(res);

//Fatorial
var num, res;
num = parseInt(prompt('Insira n1'));
res = (num >= 0) ? 1: 'NaN';
for (num; num>1; num--) {
  res *= num;
}
alert(res);

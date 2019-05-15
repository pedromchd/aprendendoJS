//[+][-][*][/][%][**]
var n1, n2, op, res;
n1 = parseInt(prompt('Insira n1));
op = prompt('Operação [+][-][*][/][%][**]'));
n2 = parseInt(prompt('Insira n2));
res = eval(n1+op+n2);
alert(res);

//Raiz

//Truncar

//Posição

//ListaCircular

//AnteriorPróximoMúltiplo

//Sortear
var n, l;
l = parseInt(prompt('

//Inversão
var n, a, t, r;
n = parseInt(prompt('Insira um número'));
a = parseInt(prompt(n +'\nQuantidade de algarismos'));
res = '';
while (a > 0) {
  a--;
  t = parseInt(n / 10**a);
  n -= t * 10**a;
  res = t + res;
}
alert(res);

//Fatorial
var n, f;
n = parseInt(prompt('Insira n'));
f = (n >= 0) ? 1: 'NaN';
for (n; n > 1; n--) {
  f *= n;
}
alert(f);

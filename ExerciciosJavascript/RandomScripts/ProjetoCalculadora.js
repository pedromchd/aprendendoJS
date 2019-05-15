//[+][-][*][/][%]
var n1, n2, op, res;
n1 = parseFloat(prompt('Insira n1'));
op = prompt('Operação [+][-][*][/][%]');
n2 = parseFloat(prompt('Insira n2'));
res = eval(n1 + op + n2);
alert(res);

//[**]
n1 = parseFloat(prompt('Insira n1'));
n2 = parseInt(prompt('Insira o expoente'));
res = n1**n2;
alert(res);


//Raiz
n1 = parseFloat(prompt('Insira n1'));
n2 = parseInt(prompt('Insira o índice'));
res = n1**(1/n2);
alert(res);

//Truncar
n1 = parseInt(prompt('Insira n1'));
n2 = parseInt(prompt('Insira casas a truncar'));
res = n1/(10**n2);
alert(res);

//Posição
var n1, n2;
n1 = parseInt(prompt('Insira um número'));
n2 = parseInt(prompt('Insira a posição'));
n1 /= 10**n2;
n1 -= parseInt(n1);
res = parseInt(n1*10);
alert(res);

//ListaCircular
var n1, n2, a, p, res;
n1 = parseInt(prompt('Insira o tamanho da lista'));
n2 = parseInt(prompt('Insira a posição'));
a = (n2-1+n1)%n1;
p = (n2+1)%n1;
res = a+' e '+p;
alert(res);

//AnteriorPróximoMúltiplo
var n1, n2, a, p, res;
n1 = parseInt(prompt('Insira n1'));
n2 = parseInt(prompt('Número de referência'));
a = n1-1-(n1-1)%n2;
p = n1+(n2-n1%n2);
res = a+' e '+p;
alert(res);

//Sortear
var n1, res;
n1 = parseInt(prompt('Números sorteados'));
res = Math.round(Math.random()*n1);
alert(res);

//Inversão
var n1, n2, t, res;
n1 = parseInt(prompt('Insira um número'));
n2 = parseInt(prompt(n1 +'\nQuantidade de algarismos'));
res = '';
while (n2 > 0) {
  n2--;
  t = parseInt(n1 / 10**n2);
  n1 -= t * 10**n2;
  res = t + res;
}
alert(res);

//Fatorial
var n1, res;
n1 = parseInt(prompt('Insira n1'));
res = (n1 >= 0) ? 1: 'NaN';
for (n1; n1>1; n1--) {
  res *= n1;
}
alert(res);
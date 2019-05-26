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

//MaiorMenor
var n, min, max;
n = parseInt(prompt('Números'));
min = n; max = n;
for (; ;) {
	n = prompt('Números');
	if (n == '') break;
	n = parseInt(n);
	if (n < min) min = n;
	if (n > max) max = n;
}
alert('Maior: ' + max + '\nMenor: ' + min);

//Equacao2Grau
var a, b, c, dt, x1, x2;
a = parseInt(prompt("Valor de A"));
b = parseInt(prompt("Valor de B"));
c = parseInt(prompt("Valor de C"));
dt = Math.pow(b,2) - 4*a*c;
if (dt < 0) {
  alert("dt = " + dt + ". Não existe raiz real de números negativos");
} else {
x1 = (-b + Math.sqrt(dt))/(2*a);
x2 = (-b - Math.sqrt(dt))/(2*a);
alert("x1 = " + x1.toFixed(2) + " e " + "x2 = " + x2.toFixed(2));
}
console.log(a, b, c, dt, x1, x2);
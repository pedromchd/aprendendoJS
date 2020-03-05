//REPETIÇÃO
/*
while (condição) {
  instruções;
  instruções;
}
*/

alert('1');
alert('2');
//...
alert('10');

var c = 0;
while (c <= 10) {
  alert(c++);
}

//Faça um programa que lê 10 números e mostrar a soma desses números
var c, n, s;
c = 10; s = 0;
while (c > 0) {
  n = parseFloat(prompt('Insira um número\n' + c + ' números restantes\n' + 'Soma: ' + s));
  s += n; //s=s+n
  c--;
}
alert('A soma de todos os números é ' + s);

//Faça um programa que lê n números até o usuário inserir 0 e some-os
var n, s;
n = 1; s = 0;
while (n != 0) {
  n = parseFloat(prompt('Insira um número'));
  s += n;
}
alert(s);

//Ate n negativo
var n, s;
s = 0;
n = parseFloat(prompt('Número'));
while (n >= 0) {
  s += n;
  n = parseFloat(prompt('Número'));
}
alert(s);

//Soma de pares, quantidade de ímpares, média de todos, até n negativo
var N, C, SP, QI, MT;
C = 0; SP = 0; QI = 0; MT = 0;
N = parseFloat(prompt('Números'));
while (N >= 0) {
  if (N%2 == 0) SP += N;
  if (N%2 != 0) QI++;
  MT += N;
  C++;
  N = parseFloat(prompt('Números'));
}
console.log(SP,QI,MT/C);

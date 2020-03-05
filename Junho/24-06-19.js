/*
do {
  instruções;
  instruções;
} while (condição);

var num;
do {
  num = Number(prompt('Número:'));
  if (num == 0 || isNaN(num)) {
    alert('Digite outro número:');
  }
} while (num == 0 || isNaN(num));
*/

var N, MN, C;
C = 10; MN = 0;
while (C > 0) {
  C--;
  do {
    N = parseInt(prompt('Insira um número'));
    if (N > MN) MN = N;
  } while (N == 0 || isNaN(N));
}
alert(MN);

/* Seja a seguinte série 1, 4, 9, 16, 25, 36, 49... 
escreva um programa que gere essa série, até o enésimo termo, 
sendo N definido pelo usuário e N > 0 */
var N, S;
S = '';
N = parseInt(prompt('Número de N\'s a ser inserida'));
while (N > 0 || isNaN(N)) {
  S = N--**2 + '\n' + S;
}
alert(S);

var N, mN, C;
do {
  N = parseInt(prompt('Insira um número'));
} while (N == 0 || isNaN(N));
mN = N; C = 9;
while (C > 0) {
  C--;
  do {
    N = parseInt(prompt('Inria um número'));
    if (N < mN) mN = N;
  } while (N == 0 || isNaN(N));
}
alert(mN);
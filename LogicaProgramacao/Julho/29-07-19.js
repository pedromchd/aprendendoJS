//PJ 2018 F1 ALBUM
var N, M, X;
N = parseInt(prompt('Número de espaços no álbum:'));
M = parseInt(prompt('Número de figuras compradas:'));
/*for ( ; M > 0 ; M--) {
  X = parseInt(prompt('Figura comprada:'));
  N--;
}*/
alert(N-M);

//PJ 2010 F1 GARÇOM
var N, L, C, Q;
N = parseInt(prompt('Número de bandejas carregadas pelo garçom:'));
for (Q = 0; N > 0; N--) {
  L = parseInt(prompt('Número de latas na bandeja ' + N));
  C = parseInt(prompt('Número de copos na bandeja ' + N));
  if (L > C) {
    Q += C;
  }
}
alert(Q + ' copos foram quebrados');

//PJ 2010 F2 ESCADA
var N, T, A, C;
C = 10;
N = parseInt(prompt('Número de pessoas detectadas pelo sensor:'));
do {
  T = parseInt(prompt('Instante que esta pessoa passou pelo sensor:'));
  A = T;
} while (isNaN(T)); 
N--;
while (N > 0) {
  T = parseInt(prompt('Instante que esta pessoa passou pelo sensor:'));
  C += T - A;
  A = T;
  N--;
}
alert(C + 'segundos');

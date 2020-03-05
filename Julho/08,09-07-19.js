/***********************
Pedro Machado - 11030373
Profa. Raquel M. Barbosa
Logica Program. - 2o Bim
***********************/


//1//
var M, N, P, C, D;
do {
  M = parseInt(prompt('Insira um número e serão mostrados os números primos até ele'));
} while (isNaN(M) || M < 0);
for (P = '', N = 1; N <= M; N++) {
  for (D = 0, C = N; C > 0; C--) {
    if (N/C == parseInt(N/C)) {
      D += N/C;
    }
  }
  if (D == N+1) {
    P += N + ' ';
  }
}
alert('Os números primos até ' + M + ' são:\n' + P);


//2//
var N, D, PRQ;
do {
  N = parseInt(prompt('Insira um número e descubra sua pseudo raiz quadrada'));
} while (isNaN(N) || N < 0);
for (PRQ = 0, D = N; D > 0; D--) {
  if (N/D == parseInt(N/D)) {
    if (D**2 <= N) {
      PRQ = D;
      break;  
    }
  }
}
alert('A PRQ de ' + N + ' é:\n' + PRQ);


//3//
var N, E, P, e;
do {
  N = parseInt(prompt('Insira um número base da sua potência'));
} while (isNaN(N));
do {
  E = parseInt(prompt('Insira um expoente para elevar a base'));
} while (isNaN(E));
for (e = E, P = 1; E > 0; E--) {
  P *= N;
}
if (E < 0) {
  E *= -1;
  for (P = 1; E > 0; E--) {
    P *= N;
  }
  P = '1/' + P;
}
alert('O resultado de ' + N + '^' + e + ' é:\n' + P);

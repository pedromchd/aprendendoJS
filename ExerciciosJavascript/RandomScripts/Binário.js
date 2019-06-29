//CONVERTER INTEIRO EM BINÁRIO
var N, B, M;
B = '';
N = parseInt(prompt('Número para converter em binário:'));
do {
  M = N%2;
  N = parseInt(N/2);
  B = M + B;
} while (N != 0);
alert(B);

/*CONVERTER BINÁRIO EM INTEIRO
var N, L, B, I;
N = prompt('Número para converter em binário');
L = N.length;
I = 0;
while (L > 0) {
  B = parseInt(N/10**--L);
  I += B*2**L;
  N -= B*10**L--;
}
alert(I);
*/
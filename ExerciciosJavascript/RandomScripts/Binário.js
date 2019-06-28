var N, B, M;
B = '';
N = parseInt(prompt('Número para converter em binário:'));
do {
  M = N%2;
  N = parseInt(N/2);
  B = M + B;
} while(N != 0);
alert(B);

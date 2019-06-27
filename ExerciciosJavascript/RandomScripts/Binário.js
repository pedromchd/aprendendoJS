var N, B, M, D;
N = parseInt(prompt('Número para converter em binário:'));
M = N % 2;
D = parseInt(N / 2);
B = ''; B = M + B;
do {
  M = D % 2;
  D = parseInt(D / 2);
  B = M + B;
} while(D != 0);
alert(N + ' = ' + B);

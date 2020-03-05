//Informe um número inteiro e transforme em binário
var N, B;
B = '';
do {
  N = parseInt(prompt('Insira um número e este será convertido em binário'));
} while (N < 0 || isNaN(N));
while (N != 0) {
  B = N%2 + B;
  N = parseInt(N/2);
}
alert(B);

//Escrever toda a tabuada do um ao dez
var N, M;
N = 1; M = 1;
while (N <= 10) {
  console.log(N + ' x ' + M + ' = ' + N * M++);
  if (M > 10) {
    console.log();
    M = 1; N++;
  }
}
//
var N, M;
N = 1;
while (N <= 10) {
  console.log('Tabuada do ' + N + ':\n');
  M = 1; 
   while (M <= 10) {
    console.log(N + ' x ' + M + ' = ' + N * M);
    M++;
  }
  console.log('\n');
  N++;
}

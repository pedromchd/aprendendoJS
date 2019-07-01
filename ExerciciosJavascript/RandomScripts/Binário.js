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

/*
Informe um número binário e transforme em inteiro
var B, N, E;
N = 0; E = 0;
do {
  B = parseInt(prompt('Insira um número e este será convertido em binário'));
} while (B < 0 || isNaN(B));
while (parseInt(B) != 0) {
  B /= 10;
  N += parseInt((B - parseInt(B))*10)*2**E++;
}
alert(N);
*/

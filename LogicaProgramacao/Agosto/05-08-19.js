/*********************
Pedro Machado 11030373
Logica Program 3o Bim.
*********************/

//1//
var N1, N2, D1, D2, D, Dt, n1, n2; 
N1 = parseInt(prompt('Primeiro número para o cálculo de M.M.C.:'));
N2 = parseInt(prompt('Segundo número para o cálculo de M.M.C.:'));
n1 = N1; n2 = N2;
Dt = 1;
while (N1 >= 1 && N2 >= 1) {
  if (N1 > N2) {
    N2 = n1;
    N1 = n2;
  }  
  if (N1 != 1) {
    for (D1 = 2; N1%D1 != 0; D1++) {
    }
  }
  if (N2 != 1) {
    for (D2 = 2; N2%D2 != 0; D2++) {
    }
  }
  if (D1 <= D2 && N1 != 1) {
    D = D1;  
    Dt *= D1;
  } else {
    D = D2;
    Dt *= D2;
  }
  if (N1%D == 0 && N1 != 1) {
    N1 /= D;
  }
  if (N2%D == 0) {
    N2 /= D;
  }
  console.log(N1, N2, Dt);
  if (N1 == 1 && N2 == 1) {
    break;
  }
}
alert('O M.M.C. entre ' + n1 + ' e ' + n2 + ' é ' + Dt);

//2//
var G, C, N, V, L;
C = 0; G = 0;
do {
  N = prompt('Nome da conta a se pagar:');
  V = parseInt(prompt('Valor da conta a ser paga:'));
  C++; 
  G += V;
  L = prompt('Deseja informar nova conta? S/N');
  if (L == 'N' || L == 'n') {
    break;
  } else {
    continue;
  }
} while (true);
alert('Quantidade de contas informadas: ' + C + '\nTotal a pagar: R$' + G);

//3//
var V, R, N, M;
V = parseInt(prompt('Valor inicial aplicado na poupança:'));
R = parseInt(prompt('Rendimento mensal da poupança em %:'));
N = parseInt(prompt('Número de meses a serem simulados:'));
for (M = N; M > 0; M--) {
  V += R/100 * V;
}
alert('Após ' + N + ' meses, o valor final na poupança será de R$' + V.toFixed(2));

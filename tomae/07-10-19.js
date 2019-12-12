/***********************
Pedro Machado - 11030373
Logica Program. - 4o Bim
Profa. Raquel M. Barbosa
***********************/


//1//
var N, V, I, J, A, T;
for (I = 0, V = []; I < 10; I++) {
  do {
    N = parseInt(prompt('Cadastre 10 números:'));
  } while (isNaN(N));
  V.push(N);
}
console.log(V);
do {
  A = false;
  for (I = 0, J = 1; J < 10; I++, J++) {
    if (V[I] > V[J]) {
      T = V[I];
      V[I] = V[J];
      V[J] = T;
      A = true;
    }
  }
} while (A == true);
console.log(V);
V.pop();
alert('O segundo maior valor do vetor é: ' + V.pop());


//2//
var N, V1, V2, O, A, R, I, J, T;
do {
  N = parseInt(prompt('VETOR 1: Deseja cadastrar quantos números?'));
} while (isNaN(N));
for (V1 = []; N > 0; N--) {
  do {
    A = parseInt(prompt('VETOR 1: Insira um número:'));
  } while (isNaN(N) || V1.indexOf(A) != -1);
  V1.push(A);
}
do {
  N = parseInt(prompt('VETOR 2: Deseja cadastrar quantos números?'));
} while (isNaN(N));
for (V2 = []; N > 0; N--) {
  do {
    A = parseInt(prompt('VETOR 2: Insira um número:'));
  } while (isNaN(N) || V2.indexOf(A) != -1);
  V2.push(A);
}
do {
  O = parseInt(prompt('Insira uma operação a ser feita: \n1 - União \n2 - Intersecção \n3 - Diferença'));
} while (O != 1 && O != 2 && O != 3);
console.log(V1);
console.log(V2);
switch (O) {
  case 1:
  O = 'União: ';
  A = V1.concat(V2);
  for (R = [], I = 0; I < A.length; I++) {
    if (R.indexOf(A[I]) != -1) {
      continue;
    }
    R.push(A[I]);
  }
  break;
  case 2:
  O = 'Intersecção: ';
  for (R = [], I = 0; I < V2.length; I++) {
    if (V1.indexOf(V2[I]) != -1) {
      R.push(V2[I]);
    }
  }
  break;
  case 3:
  O = 'Diferença: ';
  for (R = [], I = 0; I < V1.length; I++) {
    if (V2.indexOf(V1[I]) == -1) {
      R.push(V1[I]);
    }
  }
}
do {
  A = false;
  for (I = 0, J = 1; J < R.length; I++, J++) {
    if (R[I] > R[J]) {
      T = R[I];
      R[I] = R[J];
      R[J] = T;
      A = true;
    }
  }
} while (A == true);
console.log(O,R);
alert(O + R);

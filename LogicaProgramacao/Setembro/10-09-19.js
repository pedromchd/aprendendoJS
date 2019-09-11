//LISTA DE VETORES
//1//
var N, V, C;
C = parseInt(prompt('Quantidade de números a inserir:'));
for (C--, V = []; C >= 0; C--) {
  N = parseInt(prompt('Insira um número:'));
  V[C] = N;
}
console.log(V);

//2//
var N, P, V, C, M, D;
N = parseInt(prompt('Números de times a se ler:'));
for (P = 0, V = [], C = 1, M = 0; C <= N; C++) {
  P = parseInt(prompt(`Pontuação do time ${C}`));
  if (P > M) {
    M = P;
  }
  V[C-1] = P;
}
for (C = 0, D = 0; C < N; C++) {
  if (V[C] == M) {
    D++;
  }
}
console.log(V,M,D);

//3//
var N, V, M, A, C;
for (V = [], M = 0, C = 0; C < 10; C++) {
  N = parseInt(prompt('Insira um número:'));
  V[C] = N;
  M += N/10;
}
for (C = 0, A = 0; C < 10; C++) {
  if (V[C] > M) {
    A++;
  }
}
console.log(V,M,A);

//4//
var N, V, C, S, Q;
for (C = 0; C < 10; C++) {
  N = parseFloat(prompt('Insira números reais:'));
  V[C] = N;
}
for (C = 0, Q = 0, S = 0; C < 10; C++) {
  if (V[C] > 0) {
    S += V[C];
  } else if (V[C] < 0) {
    Q++;
  }
}
console.log(V,Q,S);

//5//
var V, N, M, m, C;
for (C = 0, M = 0, m = undefined; C < 15; C++) {
  N = parseInt(prompt('Insira números:'));
  if (m == undefined) {
    m = N;
  } else if (N < m) {
    m = N;
  } else if (N > M) {
    M = N;
  }
  V[C] = N;
}
console.log(V);
for (C = 0; C < 15; C++) {
  if (V[C] == m) {
    console.log(m,C);
  }
  if (V[C] == M) {
    console.log(M,C);
  }
}

//6//
var N, V1, V2, VT, C;
for (C = 0, V1 = []; C < 10; C++) {
  N = parseInt(prompt('Vetor 1. Insira quaisquer números:'));
  V1[C] = N;
}
for (C = 0, V2 = [], VT = []; C < 10; C++) {
  N = parseInt(prompt('Vetor 2. Insira quaisquer números:'));
  V2[C] = N;
  VT[C] = V1[C] + V2[C];
}
console.log(V1);
console.log(V2);
console.log(VT);

//7//
var C, V, N, A, P;
for (C = 0, V = []; C < 20; C++) {
  N = parseInt(prompt('Insira diversos números:'));
  V[C] = N;
}
do {
  A = parseInt(prompt('Insira um número A'));
} while (isNaN(A));
for (C = 0, P = []; C < 20; C++) {
  P[C] = A*V[C];
}
console.log(V,A);
console.log(P);

//8//
var C, NJ, AJ, N, A, M;
for (C = 0, NJ = [], AJ = [], M = 0; C < 12; C++) {
  N = prompt('Insira o nome do jogador');
  A = parseFloat(prompt('Insira sua altura:'));
  if (A > M) {
    M = A;
  }
  NJ[C] = N;
  AJ[C] = A;
}
console.log(NJ,AJ);
for (C = 0; C < 12; C++) {
  if (AJ[C] == M) {
    console.log(NJ[C],AJ[C]);
  }
}

//9//
var C, N, V1, V2, V3, V4;
for (C = 0, V1 = []; C < 5; C++) {
  N = parseInt(prompt('Vetor 1. Insira números:'));
  V1[C] = N;
}
for (C = 0, V2 = []; C < 5; C++) {
  N = parseInt(prompt('Vetor 2. Insira números:'));
  V2[C] = N;
}
for (C = 0, V3 = []; C < 5; C++) {
  N = parseInt(prompt('Vetor 3. Insira números:'));
  V3[C] = N;
}
for (C = 0, V4 = []; C < 5; C++) {
  V4[C] = V1[C] * V3[C] / V2[C];
}
console.log(V1);
console.log(V2);
console.log(V3);
console.log(V4);

//10//
var C, V, P, I, N, p, i;
for (C = 0, V = []; C < 30; C++) {
  N = parseInt(prompt('Insira um número:'));
  V[C] = N;
}
for (C = 0, p = 0, i = 0, P = [], I = []; C < V.length; C++) {
  if (V[C]%2 == 0 && P.length != 15) {
    P[p] = V[C];
    p++;
  } else if (V[C]%2 != 0 && I.length != 15) {
    I[i] = V[C];
    i++;
  }
}
if (P.length == 15) {
  console.log('O vetor PARES está cheio!');
}
if (I.length == 15) {
  console.log('O vetor ÍMPARES está cheio!');
}
console.log(V);
console.log(P);
console.log(I);

//11//
var V, T, C, N, c;
for (C = 0, V = []; C < 20; C++) {
  N = parseInt(prompt('Insira um número:'));
  V[C] = N;
}
console.log(V);
for (C = 0, c = V.length-1; C < V.length, c >= 0; C++, c--) {
  T = V[C]
  V[C] = V[c];
  V[c] = T;
  if (C == 9) {
    break;
  }
}
console.log(V);

//12//
var A, B, C, N, P, c;
for (C = 0, A = []; C < 6; C++) {
  N = parseInt(prompt('Insira os números do gabarito da mega-sena:'));
  A[C] = N;
}
for (C = 0, B = []; C < 10; C++) {
  N = parseInt(prompt('Insira os 10 números da aposta:'));
  B[C] = N;
}
for (C = 0, P = 0; C < A.length; C++) {
  for (c = 0; c < B.length; c++) {
    if (B[c] == A[C]) {
      P++;
    }
  }
}
console.log(A);
console.log(B);
switch (P) {
  case 4:
  console.log(P,'quadra');
  break;
  case 5:
  console.log(P,'quina');
  break;
  case 6:
  console.log(P,'sena');
}

//ORDENADOR
var C, Q, V, N, m, M, O, c, P;
Q = parseInt(prompt('Quantidade de números a inserir:'));
for (C = 0, V = [], m = undefined, M = undefined; C < Q; C++) {
  N = parseInt(prompt('Insira um número'));
  if (m == undefined && M == undefined) {
    m = N;
    M = N;
  }
  if (N < m) {
    m = N;
  } else if (N > M) {
    M = N;
  }
  V[C] = N;
}
for (C = m, O = [], P = 0; C <= M; C++) {
  for (c = 0; c < Q; c++) {
    if (V[c] == C) {
      O[P] = C;
      P++;
    }
  }
}
console.log(V);
console.log(m,M);
console.log(O);

/* ARRAYS - VETORES
var peso1 = 2;
var peso2 = 3;
var peso3 = 5;
var peso4 = 8;
var peso = [2, 3, 5, 8];
-           0  1  2  3
var pessoas = ["Ana", "Bruno", "Miguel", "Lucas"];
-                0       1        2         3
//peso[1] == 3;
//pessoas[2] == "Miguel";

*///MOSTRAR OS PESOS PARES
var peso = [2, 3, 5, 8];
for (var c = 0; c < peso.length; c++) {
  if (peso[c]%2 == 0) {
    console.log(peso[c]);
  }
}
/*
var vetor = [];
vetor[0] = "pipoca";
vetor[1] = 1 + 1;
vetor[2] = 3.1415;
vetor[3] = prompt("Digite o quarto elemento:");
console.log(vetor);
*/
//CADASTRAR PESSOAS
var N, P, V, C;
do {
  N = parseInt(prompt('Número de pessoas que deseja cadastrar:'));
} while (isNaN(N));
for (C = 0, V = []; C < N; C++) {
  do {
    P = prompt('Insira o nome da pessoa:');
  } while (V.indexOf(P) != -1);
  V[C] = P; 
}
console.log(V);

//LÊ 10 NÚMEROS E SOMA O PRIMEIRO COM O ÚLTIMO
var N, S, C;
for (S = [], C = 0; C < 10; C++) {
  do {
    N = parseInt(prompt('Insira um número:'));
  } while (isNaN(N));
  S[C] = N;
}
console.log(S[0] + S[9]);

//LÊ N NÚMEROS E SOMA O PRIMEIRO COM O ÚLTIMO
var Q, N, S, C;
Q = parseInt(prompt('Quantidade de números a inserir:'));
for (S = [], C = 0; C < Q; C++) {
  N = parseInt(prompt('Insira um número:'));
  S[C] = N;
}
console.log(S[0] + S[--Q]);

/*
LÊ N NÚMEROS E SOMA O PRIMEIRO COM O ÚLTIMO
SOMA DOS PARES
SOMA DOS ÍMPARES
MAIOR VALOR
MENOR VALOR
MÉDIA
ACIMA DA MÉDIA
ABAIXO DA MÉDIA1
ORDEM CRESCENTE
*/
var Q, N, S, C, P, I, M, m, Me, A, a, O;
Q = parseInt(prompt('Quantidade de números a inserir:'));
for (S = [], C = 0, P = 0, I = 0, M = undefined, m = undefined, Me = 0; C < Q; C++) {
  N = parseInt(prompt('Insira um número:'));
  if (M == undefined) {
    M = N;
  }
  if (m == undefined) {
    m = N;
  }
  if (N > M) {
    M = N;
  } else if (N < m) {
    m = N;
  }
  (N%2 == 0) ? P += N : I += N;
  S[C] = N;
  Me += N/Q;
}
for (C = 0, A = 0, a = 0; C < Q; C++) {
  if (S[C] == Me) {
    continue;
  } else {
    (S[C] > Me) ? A++ : a++;
  }
}
for (C = m, O = ''; C <= M; C++) {
  if (String(S + ',').indexOf(C + ',') != -1) {
    O += C + ' ';
  }
}
console.log(S);
console.log(S[0] + S[--Q]);
console.log(P, I);
console.log(m, M);
console.log(Me);
console.log(a, A);
console.log(O);

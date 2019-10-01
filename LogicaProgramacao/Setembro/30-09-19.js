//Vetores/Arrays em JS]
var S, V;
V = [];
do {
  S = prompt();
  if (S == '') continue; else V[V.length] = S;
} while (S != '');
console.log(V);

/* VETORES DE VETORES === MATRIZES
V = [[], [], ...];
*/
var m = [[], []];
m[0] = [1, 2, 3, 4];
m[1] = [1, 4, 9, 16];

/*
   0  1  2  3
0 [1][2][3][4]
1 [1][4][9][16]
*/

m[1][2] = 9;
//linha primeiro coluna depois

m = [[1, 2, 3, 4], [1, 4, 9, 16]];
alert(m[0][3] + " ao quadrado é " + m[1][3]);

M = [[0, 1, 2, 3], ['Raquel', 'Pedro', 'Luiza']];
M[1][1][3] // M = 'r';

var M, C, C2;
M = [[], [], []];
for (C = 0; C < 3; C++) {
  for (C2 = 0; C2 < 3; C2++) {
    M[C][C2] = prompt();
  }
}

//Somar as linhas de uma matriz 3x3
var M, C, A, S;
M = [[], [], []];
S = [];
for (C = 0; C < 3; C++) {
  for (S[C] = 0, A = 0; A < 3; A++) {
    M[C][A] = parseInt(prompt('Insira números'));
    S[C] += M[C][A]; 
  }
}
console.log(S);

//FUNÇÕES DE VETORES

//.length
var v = [];
alert(v.length);  //0
alert(v[1]); //undefined

//.concat(vetor)
var v1 = ["a", "b", "c"]; //["a", "b", "c"]
var v2 = [1, 2, 3]; //[1, 2, 3]
var v3 = v1.concat(v2); //["a", "b", "c", 1, 2, 3, 4]

//.fill(valor,inicio,fim)
alert(v2.fill(4)); //[4, 4, 4]
alert([1, 2, 3].fill(4,1)); //[1, 4, 4]
alert([1, 2, 3].fill(4,1,2)); //[1, 4, 3]
alert([1, 2, 3].fill(4,1,3)); //[1, 4, 4]

//.indexOf(valor) / .lastIndexOf(valor)
var v = [2, 9, 15, 9, 23];
alert(v.indexOf(1)); //-1
alert(v.indexOf(9)); //1
alert(v.indexOf(9,2)); //3

var v = [2, 5, 9, 2];
alert(v.lastIndexOf(2)); //3
alert(v.lastIndexOf(7)); //-1

//.push(valor) / .pop()
var v = [1, 2];
alert(v.push(9)); //3 (v.length)
alert(v); //[1, 2, 9]
alert(v.pop()); //9
alert(v); //[1, 2]

//.unshift(valor) / .shift()
var v = [1, 2];
alert(v.unshift(9)); //3 (v.length)
alert(v); //[9, 1, 2]
alert(v.shift()); //9
alert(v); //[1, 2]

//.reverse()
var v = [1, 2, 3];
alert(v.reverse()); //[3, 2, 1]

//.slice(inicio,fim)
var v1 = ["Banana", "Laranja", "Limão", "Maçã", "Manga"];
var v2 = v1.slice(3); //["Maçã", "Manga"]
var v3 = v1.slice(1,3); //["Laranja", "Limão"]

//.sort()
var v1 = [1, 10, 21, 2];
v1.sort(); //[1, 10, 2, 21] COMO EM ["1", "10", "2", "21"]

//.join(separador)
var v1 = [1, 2, 3, 4, 5];
alert(v1.join("/")); //"1/2/3/4/5"

//.split(separador)
var s = "teste de split";
var r1 = s.split(" "); //['teste', 'de', 'split']
var r2 = s.split(); //['teste de split']

"fim de vetores".split("").reverse().join(""); //"serotev ed mif"

//LER DUAS STRINGS E MSOTRAR AS PALAVRAS
var S, T, R, C;
S = prompt('Insira um texto').toLowerCase().split(" ");
T = prompt('Insira o texto 2').toLowerCase().split(" ");
for (R = [], C = 0; C < T.length; C++) {
  if (S.indexOf(T[C]) == -1) {
    R.push(T[C]);
  }
}
R = R.join(" ");
console.log(R);

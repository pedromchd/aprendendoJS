/*Functions em JS

- EXEMPLOS
alert(arg)
prompt(arg)
parseInt(arg)
parseFloat(arg)
Math.random()

- SINTAXE
function nome_da_funcao (parametros) {
  //código a ser executado
}
function nome_da_funcao (parametros) {
  return valor;
}
*/

/*
  "Os argumentos dão os
  valores para os parâmetros..."
  Barbosa, Raquel 2019
*/

function Calcula_IMC(peso, altura) {
  imc = peso/(altura*altura);
  return imc;
}
var P = parseFloat(prompt('Peso:'));
var H = parseFloat(prompt('Altura:'));
var meuIMC = Calcula_IMC(P, H);
alert("Meu IMC eh " + meuIMC.toFixed(2));

function quad(num) {
  var r = num*num;
  return r;
}
alert(quad(5));

var x = 10;
function y() {
  console.log(x);
  var x = 20;
  //var cria uma variável interna
  console.log(x);
  //return x
}
y();
console.log(x);

//EXERCÍCIO 1
var x, t;
function velocidade(dist, tempo) {
  return dist/tempo;
}
x = parseInt(prompt('Distância percorrida (metros):'));
t = parseInt(prompt('Tempo (segundos):'));
alert('A velocidade média foi de ' + velocidade(x,t) + ' m/s');

//função x(preco,pago) / quanto falta pagar, troco
var C, P, D;
function compra(C,P) {
  D = Math.abs(C - P).toFixed(2);
  if (C > P) {
    return 'Falta pagar R$' + D;
  } else if (C < P) {
    return 'Resta troco de R$' + D;
  } else {
    return 'Tudo certo, adeus!';
  }
}
C = parseFloat(prompt('Custo do produto:'));
P = parseFloat(prompt('Valor pago:'));
alert(compra(C, P));

//2//
var N, V1, V2, O, A, R, I, J, T;
function uniao() {
  for (R = [], I = 0; I < A.length; I++) {
    if (R.indexOf(A[I]) != -1) {
      continue;
    }
    R.push(A[I]);
  }
}
function inter() {
  for (R = [], I = 0; I < V2.length; I++) {
    if (V1.indexOf(V2[I]) != -1) {
      R.push(V2[I]);
    }
  }
}
function difer() {
  for (R = [], I = 0; I < V1.length; I++) {
    if (V2.indexOf(V1[I]) == -1) {
      R.push(V1[I]);
    }
  }
}
N = parseInt(prompt('VETOR 1: Deseja cadastrar quantos números?'));
for (V1 = []; N > 0; N--) {
  A = parseInt(prompt('VETOR 1: Insira um número:'));
  V1.push(A);
}
N = parseInt(prompt('VETOR 2: Deseja cadastrar quantos números?'));
for (V2 = []; N > 0; N--) {
  A = parseInt(prompt('VETOR 2: Insira um número:'));
  V2.push(A);
}
O = parseInt(prompt('Insira uma operação a ser feita: \n1 - União \n2 - Intersecção \n3 - Diferença'));
console.log(V1);
console.log(V2);
switch (O) {
  case 1:
  O = 'União: ';
  A = V1.concat(V2);
  uniao();
  break;
  case 2:
  O = 'Intersecção: ';
  inter();
  break;
  case 3:
  O = 'Diferença: ';
  difer();
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

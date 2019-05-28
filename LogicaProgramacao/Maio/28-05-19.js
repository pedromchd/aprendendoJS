/******************** *
var C,A;
scanf("%d%d","C","A");  
A = Math.ceil((A+1)/C);
printf("%d",A);
* ********************/

//TELEFÉRICO
var C, A;
C = parseInt(prompt('Insira a capacidade da cabine'));
A = parseInt(prompt('Insira a quantidade de alunos'));
alert('Serão necessárias no mínimo ' + Math.ceil(++A/C));

//XADREZ
var L, C;
L = parseInt(prompt('Número de linhas'));
C = parseInt(prompt('Número de colunas'));
if (L%2 == C%2) {
  alert('Branco');
} else {
  alert('Preto');
}

//PLANTAÇÃO DE MORANGOS
var C1, L1, C2, L2;
C1 = parseInt(prompt('Comprimento do local 1'));
L1 = parseInt(prompt('Largura do local 1'));
C2 = parseInt(prompt('Comprimento do local 2'));
L2 = parseInt(prompt('Largula do local 2'));
(C1*L1 > C2*L2) ? alert(C1*L1) : alert(C2*L2);

//MÓBILE
var A, B, C, D;
A = parseInt(prompt('Peso A'));
B = parseInt(prompt('Peso B'));
C = parseInt(prompt('Peso C'));
D = parseInt(prompt('Peso D'));
if (B == C) {
  if (B+C == D) {
    if (B+C+D == A) {
      alert('Sim');
    } else alert('Não');
  } else alert('Não');
} else alert('Não');

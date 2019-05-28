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

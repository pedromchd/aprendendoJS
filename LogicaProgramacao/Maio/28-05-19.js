//TELEFÉRICO
var C, A;
C = parseInt(prompt('Insira a capacidade da cabine'));
A = parseInt(prompt('Insira a quantidade de alunos'));;
alert('Serão necessárias no mínimo ' + Math.ceil(++A/C));

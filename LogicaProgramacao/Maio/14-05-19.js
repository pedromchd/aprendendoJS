/* Faça um programa que calcule o IMC de uma pessoa 
e classifique-a conforme a tabela
>20 ABAIXO DO PESO
>=20 <25 PESO NORMAL
>=25 <30 SOBREPESO
>=30 <40 OBESO
>=40 OBESO MÓRBIDO
*/
var h, kg, imc;
kg = parseFloat(prompt('Insira o peso em kg'));
h = parseFloat(prompt('Insira a altura em metros'));
imc = (kg/h**2).toFixed(1);
if (imc < 20) {
  alert('ABAIXO DO PESO, IMC '+ imc);
}
if (imc >= 20 && imc < 25) {
  alert('PESO NORMAL, IMC '+ imc);
}
if (imc >= 25 && imc < 30) {
  alert('SOBREPESO, IMC '+ imc);
}
if (imc >= 30 && imc < 40) {
  alert('OBESO, IMC '+ imc);
}
if (imc > 40) {
  alert('OBESO MÓRBIDO, IMC '+ imc);
}


//BOB ALICE PARÍMPAR
var P, D_1, D_2;
P = parseInt(prompt('Quem gritou par? [0]Alice, [1]Bob'));
D_1 = parseInt(prompt('Dedos de Alice'));
D_2 = parseInt(prompt('Dedos de Bob'));
if (P == 0 && (D_1+D_2)%2 == 0) {
    alert('0');
} else if (P == 1 && (D_1+D_2)%2 == 0) {
    alert('1');
} else if (P == 0 && (D_1+D_2)%2 == 1) {
    alert('1');
} else if (P == 1 && (D_1+D_2)%2 == 1) {
    alert('0');
}


//BASQUETE ROBÔS
var d = parseInt(prompt('Insira a distância do início da quadra'));
if (d <= 800)
  alert('1 ponto');
if (d > 800 && d <= 1400)
  alert('2 pontos');
if (d > 1400 && d <= 2000)
  alert('3 pontos');


//LISTA CIRCULAR
var tam, pos, prox, ant;
tam = parseInt(prompt('Insira o tamanho da lista circular'));
pos = parseInt(prompt('Insira a posição do elemento'));
if (pos == tam-1) {
  prox = 0;
} else {
  prox = pos+1;
}
if (pos == 0) {
  ant = tam-1;
} else {
  ant = pos-1;
}
alert('Posição anterior: '+ ant +'\nPróxima posição: '+ prox);

//ANT E PROX %7==0
var n = parseInt(prompt('Insira um número inteiro n'));

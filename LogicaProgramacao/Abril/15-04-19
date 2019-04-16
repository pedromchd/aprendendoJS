/* 1) Calcular o consumo médio de um automóvel (medido em quilômetros por litro)
dado que são conhecidos a distância total percorrida e o volume do combustível consumido para percorrê-la */

var dist, comb, cons;
dist = parseInt(prompt("Insira a distância total percorrida"));
comb = parseFloat(prompt("Insira combustível consumido durante o trajeto"));
cons = dist/comb;
alert("O consumo médio foi de: " + cons.toFixed(1) + " km/l");


/* 2) Construa um programa de pagamento para comissão de vendedores de peças levando-se em consideração 
que sua comissão será de 5% do valor da vendas e que você tem os seguintes dados:
Identificação do vendedor
Código da peça
Preço unitario da peça
Quantidade vendida */

var comi, nome, code, prUn, qntV;
nome = prompt("Insira o nome do vendedor");
code = parseInt(prompt("Insira o código da peça"));
prUn = parseFloat(prompt("Insira o preço unitário da peça"));
qntV = parseInt(prompt("Insira a quantidade de peças vendidas"));
comi = prUn*qntV*0.05;
alert("A comissão será de R$" + comi.toFixed(2));


/* 3) O banco inteligente está tentado minimizar o número de notas que o cliente recebe ao relizar o saque
para isso eles precisam de sua ajuda para saber dado o valor s do saque, qual a menor quantidade 
de notas que a máquina deve fornecer para o cliente 
considerando que o banco disponibiliza notas de 5, 10, 20, 50 ,100 */

var s, n100, n50, n20, n10, n5;
s = parseInt(prompt("Insira o valor do saque a ser feito"));
n100 = parseInt(s/100);
s %= 100;
n50 = parseInt(s/50);
s %= 50;
n20 = parseInt(s/20);
s %= 20;
n10 = parseInt(s/10);
s %= 10;
n5 = parseInt(s/5);
alert('\nNotas de:' + '\nR$100: '+ n100 +
'\nR$50: '+ n50 +'\nR$20: '+ n20 +
'\nR$10: '+ n10 +'\nR$5: '+ n5);


/* 4) Calcular a próxima posição e a posição anterior em uma lista circular
(sabendo-se a posição atual e o tamanho da lista)
considere 0 como posição inicial */

var tam, pos, prox, ant;
tam = parseInt(prompt('Insira o tamanho da lista circular'));
pos = parseInt(prompt('Insira a posição do elemento'));
prox = (pos+1)%tam;
ant = (pos-1+tam)%tam;
alert('Posição anterior: '+ ant +'\nPróxima posição: '+ prox);

var tam, pos, prox, ant;
tam = parseInt(prompt('Insira o tamanho da lista circular'));
pos = parseInt(prompt('Insira a posição do elemento'));
prox = (pos == tam-1) ? 0: pos+1;
ant = (pos == 0) ? tam-1: pos-1;
alert('Posição anterior: '+ ant +'\nPróxima posição: '+ prox);

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

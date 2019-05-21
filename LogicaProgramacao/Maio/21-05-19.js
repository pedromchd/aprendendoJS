alert('Oi! Tudo bem?');
alert('Oi!\nTudo bem?');

N = 13;
alert('N:' + N);
console.log('N:',N);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Criar um programa que informe a quantidade total de calorias de uma refeição 
a partir das informações do usuário sobre o prato, a sobremesa e a bebida
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/*
//Prato//
1 - Vegetariano 180
2 - Peixe 230
3 - Frango 250
4 - Carne 350
5 - Macarrão 370
//Sobremesa//
1 - Pudim 120
2 - Brigadeiro 140
3 - Sorvete 205
4 - Torta 210
5 - Moussie 225
//Bebida//
1 - Água 0
2 - Suco 110
3 - Refrigerante 150
4 - Milk Shake 230
5 - Alcóolica 295
*/
var P, S, B;
P = parseInt(prompt('Insira o prato consumido:\n1 - Vegetariano\n2 - Peixe\n3 - Frango\n4 - Carne\n5 - Macarrão'));
S = parseInt(prompt('Sobremesa consumida:\n1 - Pudim\n2 - Brigadeiro\n3 - Sorvete\n4 - Torta\n5 - Moussie'));
B = parseInt(prompt('Bebida consumida\n1 - Água\n2 - Suco\n3 - Refrigerante\n4 - Milk Shake\n5 - Alcóolica'));
//PRATO
if (P == 1) P = 180;
if (P == 2) P = 230;
if (P == 3) P = 250;
if (P == 4) P = 350; 
if (P == 5) P = 370;
//SOBREMESA
if (S == 1) S = 120;
if (S == 2) S = 140;
if (S == 3) S = 205;
if (S == 4) S = 210; 
if (S == 5) S = 225;
//BEBIDA
if (B == 1) B = 0; 
if (B == 2) B = 110; 
if (B == 3) B = 150; 
if (B == 4) B = 230; 
if (B == 5) B = 295;
//TOTAL
alert('As calorias totais de sua refeição foram: \n' + (P + S + B) + ' calorias');
console.log(P,S,B);


/*************** *
PAR ÍMPAR VC vs PC
* ***************/
var 

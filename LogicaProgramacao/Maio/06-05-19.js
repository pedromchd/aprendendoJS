/* Faça um programa que leia o nome de dois times e o número de vitórias, empates e derrotas.
Calcule e mostre o time ganhador e a quantidade de pontos que este teve, sendo
VITÓRIAS = 3 pontos;
*/

var T1, T2, V1, V2, E1, E2, D1, D2, P1, P2;
T1 = prompt('Insira o nome do time 1');
T2 = prompt('Insira o nome do time 2');
V1 = parseInt(prompt('Insira o número de vitórias do '+ T1));
E1 = parseInt(prompt('Insira o número de empates do '+ T1));
D1 = parseInt(prompt('Insira o número de derrotas do '+ T1));
V2 = parseInt(prompt('Insira o número de vitórias do '+ T2));
E2 = parseInt(prompt('Insira o número de empates do '+ T2));
D2 = parseInt(prompt('Insira o número de derrotas do '+ T2));
P1 = V1*3 + E1;
P2 = V2*3 + E2;
if (P1 > P2) {
  alert('O time '+ T1 +' ganhou com '+ P1 +' pontos'); 
}
if (P1 < P2) {
  alert('O time '+ T2 +' ganhou com '+ P2 +' pontos'); 
}
if (P1 == P2) {
  alert(T1 +' e '+ T2 +' empataram com '+ P1 +' pontos');  
}

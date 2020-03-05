//ALGORITMO ProximoPar
var n1, pp;
n1 = parseInt(prompt("Insira um numero qualquer para saber o seu próximo par"));
pp = n1 +(2 -(n1 %2));
alert("O próximo par de " + n1 + " é " + pp);

//ALGORITMO ParAnterior
var n1, pa;
n1 = parseInt(prompt("Insira um numero qualquer para saber o seu par anterior"));
pa = n1 -(2 -(n1 %2));
alert("O par anterior de " + n1 + " é " + pa);

//ALGORITMO ProximoImpar
var n1, pi;
n1 = parseInt(prompt("Insira um numero qualquer para saber o seu próximo impar"));
pi = n1 +(1 +(n1 %2));
alert("O próximo impar de " + n1 + " é " + pi);

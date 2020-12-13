/***********************
Pedro Machado - 11030373
Lógica - 2o Bimestre
Profa. Raquel Barbosa
***********************/

//1//
var x, y;
x = parseInt(prompt('Insira o valor x'));
y = parseInt(prompt('Insira o valor y'));
if (x == 0 && y == 0) alert('O ponto está na origem');
else if (x == 0) alert('O ponto está sobre o eixo y');
else if (y == 0) alert('O ponto está sobre o eixo x');
else if (x > 0 && y > 0) alert('O ponto está no primeiro quadrante');
else if (x < 0 && y > 0) alert('O ponto está no segundo quadrante');
else if (x < 0 && y < 0) alert('O ponto está no terceiro quadrante');
else if (x > 0 && y < 0) alert('O ponto está no quarto quadrante');


//2//
var a, b, c, d, e, par, imp, pos, neg;
par = 0; imp = 0; pos = 0; neg = 0;
//A
a = parseInt(prompt('Insira o valor A'));
console.log(a);
if (a > 0) pos++;
if (a < 0) neg++;
a = Math.abs(a);
if (a%2 == 0) par++;
if (a%2 == 1) imp++;
//B
b = parseInt(prompt('Insira o valor B'));
console.log(b);
if (b > 0) pos++;
if (b < 0) neg++;
b = Math.abs(b);
if (b%2 == 0) par++;
if (b%2 == 1) imp++;
//C
c = parseInt(prompt('Insira o valor C'));
console.log(c);
if (c > 0) pos++;
if (c < 0) neg++;
c = Math.abs(c);
if (c%2 == 0) par++;
if (c%2 == 1) imp++;
//D
d = parseInt(prompt('Insira o valor D'));
console.log(d);
if (d > 0) pos++;
if (d < 0) neg++;
d = Math.abs(d);
if (d%2 == 0) par++;
if (d%2 == 1) imp++;
//E
e = parseInt(prompt('Insira o valor E'));
console.log(e);
if (e > 0) pos++;
if (e < 0) neg++;
e = Math.abs(e);
if (e%2 == 0) par++;
if (e%2 == 1) imp++;
//alert
alert(par + ' são pares\n' + imp + ' são ímpares\n' + pos + ' são positivos\n' + neg + ' são negativos');


//3//
var A1, A2, A3, MG;
A1 = parseInt(prompt('Pessoas que trabalham no andar 1'));
A2 = parseInt(prompt('Pessoas que trabalham no andar 2'));
A3 = parseInt(prompt('Pessoas que trabalham no andar 3'));
if (A1 == A2 && A1 == A3) MG = A1*4;
else if (Math.max(A1,A2,A3) == A1) MG = A2*2 + A3*4;
else if (Math.max(A1,A2,A3) == A2) MG = A1*2 + A3*2;
else if (Math.max(A1,A2,A3) == A3) MG = A1*4 + A2*2; 
//Para A1==A2==A3, a máquina será posicionada no andar central.
alert(MG);

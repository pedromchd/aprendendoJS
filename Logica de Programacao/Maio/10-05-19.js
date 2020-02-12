/*********
EXERCÍCIOS
*********/

//1//
var N1, N2;
N1 = parseInt(prompt('Insira um número'));
N2 = parseInt(prompt('Insira outro número'));
if (N1 > N2) {
  alert(N1-N2);
} else {
  alert(N2-N1);
}

//2//
var N;
N = parseInt(prompt('Insira um número inteiro'));
if (N >= 1 && N <= 9) {
  alert('O valor está na faixa permitida');
} else {
  alert('O valor está fora da faixa permitida');
}

//3// 
var num;
num = parseInt(prompt('Insira um número'));
if (!(num >= 0 && num <= 10)) {
  alert('O número não obedece à condição estabelecida');
} else if (num == 0) {
  alert('Zero');
} else if (num == 1) {
  alert('Um');
} else if (num == 2) {
  alert('Dois');
} else if (num == 3) {
  alert('Três');
} else if (num == 4) {
  alert('Quatro');
} else if (num == 5) {
  alert('Cinco');
} else if (num == 6) {
  alert('Seis');
} else if (num == 7) {
  alert('Sete');
} else if (num == 8) {
  alert('Oito');
} else if (num == 9) {
  alert('Nove');
} else if (num == 10) {
  alert('Dez');
}

//4//
var age;
age = parseInt(prompt('Insira uma idade:'));
if (age < 16) {
  alert('Não eleitor');
}
if (age > 18 && age < 65) {
  alert('Eleitor obrigatório');
} else if (age >= 16 || age >= 65) {
  alert('Eleitor facultativo');
}

//5// 
var a, b, c, d, mul;
a = parseInt(prompt('Insira um número a'));
b = parseInt(prompt('Insira um número b'));
c = parseInt(prompt('Insira um número c'));
d = parseInt(prompt('Insira um número d'));
mul = '';
if (a%2 == 0 && a%3 == 0) {
  mul += '\n'+a;
}
if (b%2 == 0 && b%3 == 0) {
  mul += '\n'+b;
}
if (c%2 == 0 && c%3 == 0) {
  mul += '\n'+c;
}
if (d%2 == 0 && d%3 == 0) {
  mul += '\n'+d;
}
if (mul == '') {
  alert('Não há valores múltiplos de 2 e 3');
} else {
  alert('Os múltiplos de 2 e 3 são: '+ mul);
}

//6//
var n;
n = parseInt(prompt('Insira um número'));
if (n > 0) {
  alert(n/2);
} else {
  alert(Math.pow(n,2));
}

//7//
var N1, N2, N3, N4, N5, MAX, MIN;
N1 = parseInt(prompt('N1'));
N2 = parseInt(prompt('N2'));
N3 = parseInt(prompt('N3'));
N4 = parseInt(prompt('N4'));
N5 = parseInt(prompt('N5'));
//N1
if (N1 > N2 && N1 > N3 && N1 > N4 && N1 > N5) {
  MAX = N1;
} else if (N1 < N2 && N1 < N3 && N1 < N4 && N1 < N5) {
  MIN = N1;
}
//N2
if (N2 > N1 && N2 > N3 && N2 > N4 && N2 > N5) {
  MAX = N2;
} else if (N2 < N1 && N2 < N3 && N2 < N4 && N2 < N5) {
  MIN = N2;
}
//N3
if (N3 > N2 && N3 > N1 && N3 > N4 && N3 > N5) {
  MAX = N3;
} else if (N3 < N2 && N3 < N1 && N3 < N4 && N3 < N5) {
  MIN = N3;
}
//N4
if (N4 > N2 && N4 > N3 && N4 > N1 && N4 > N5) {
  MAX = N4;
} else if (N4 < N2 && N4 < N3 && N4 < N1 && N4 < N5) {
  MIN = N4;
}
//N5
if (N5 > N2 && N5 > N3 && N5 > N4 && N5 > N1) {
  MAX = N5;
} else if (N5 < N2 && N5 < N3 && N5 < N4 && N5 < N1) {
  MIN = N5;
}
alert('O maior número é : '+ MAX +'\nE o menor é '+ MIN);

//8//
var n;
n = parseInt(prompt('Insira um número'));
if (!(n > 3)) {
  alert(n);
}

//9//
var ano;
ano = parseInt(prompt('Insira um ano maior que 1584'));
if (ano > 1584 && (ano%400 == 0 || (ano%4 == 0 && ano%100 != 0))) {
  alert(ano +' é bissexto');
} else {
  alert(ano +' não é bissexto');
}

//10//
var preco, code;
preco = parseFloat(prompt('Insira o preço do produto'));
code = parseInt(prompt('Insira o código do produto'));
if (code == 1) {
  alert('O produdo veio do norte, com o preço de R$'+ preco);
} else if (code == 2 || code== 5 || code == 9) {
  alert('O produdo veio do sul, com o preço de R$'+ preco);
} else if (code == 3 || (code >= 10 && code <= 15)) {
  alert('O produdo veio do leste, com o preço de R$'+ preco);
} else if (code == 7 || code == 20) {
  alert('O produdo veio do oeste, com o preço de R$'+ preco);
} else {
  alert('O produdo é importado, com o preço de R$'+ preco);
}

//11//
var n;
n = parseInt(prompt('Insira um número'));
if (n%3 == 0) {
  alert(n +' é múltiplo de 3');
} else {
  alert(n +' não é múltiplo de 3');
}

//12//
var n1, n2;
n1 = parseInt(prompt('Insira n1'));
n2 = parseInt(prompt('Insira n2'));
if (n1%n2 == 0) {
  alert('A divisão de '+ n1 +' por ' + n2 +' é exata');
} else {
  alert('A divisão de '+ n1 +' por ' + n2 +' não é exata');
}

//13//
var produ, venda;
produ = parseFloat(prompt('Insira o valor do produto'));
if (produ < 20) {
  venda = produ + produ*0.45;
  alert('O valor de venda para este produto será de R$'+ venda);
} else {
  venda = produ + produ*0.3;
  alert('O valor de venda para este produto será de R$'+ venda);
}

//14//
var sal, aum;
sal = parseFloat(prompt('Insira o salário do funcionário'));
if (sal >= 0 && sal <= 400) {
  aum = sal + sal*0.15;
  alert('O aumento será de 15%, o novo salário é de R$'+ aum);
}
if (sal > 400 && sal <= 700) {
  aum = sal + sal*0.12;
  alert('O aumento será de 12%, o novo salário é de R$'+ aum);
}
if (sal > 700 && sal <= 1000) {
  aum = sal + sal*0.10;
  alert('O aumento será de 10%, o novo salário é de R$'+ aum);
}
if (sal > 1000 && sal <= 1800) {
  aum = sal + sal*0.07;
  alert('O aumento será de 7%, o novo salário é de R$'+ aum);
}
if (sal > 1800 && sal <= 2500) {
  aum = sal + sal*0.05;
  alert('O aumento será de 5%, o novo salário é de R$'+ aum);
}
if (sal > 2500) {
  alert('O aumento não será feito, seu burguês');
}

//15//
var bruto, prest;
bruto = parseFloat(prompt('Insira o salário bruto'));
prest = parseFloat(prompt('Insira o valor da prestação'));
if (prest <= bruto*0.3) {
  alert('Empréstimo pode ser concedido');
} else {
  alert('Empréstimo não pode ser concedido');
}

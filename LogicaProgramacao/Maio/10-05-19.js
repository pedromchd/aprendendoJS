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


//6//
var n;
n = parseInt(prompt('Insira um número'));
if (n > 0) {
  alert(n/2);
} else {
  alert(Math.pow(n,2));
}

//7//
var N1, N2, N3, N4, N5;
N1 = parseInt(prompt('N1'));
N2 = parseInt(prompt('N2'));
N3 = parseInt(prompt('N3'));
N4 = parseInt(prompt('N4'));
N5 = parseInt(prompt('N5'));
alert('Menor número: '+ Math.min(N1,N2,N3,N4,N5) +'\nMaior número: '+ Math.max(N1,N2,N3,N4,N5));

//8//
var n;
n = parseInt(prompt('Insira um número'));
if (!(n > 3)) {
  alert(n);
}

//9//


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
if (n1%n2 ==0) {
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


//15//
var bruto, prest;
bruto = parseFloat(prompt('Insira o salário bruto'));
prest = parseFloat(prompt('Insira o valor da prestação'));
if (prest <= bruto*0.3) {
  alert('Empréstimo pode ser concedido');
} else {
  alert('Empréstimo não pode ser concedido');
}

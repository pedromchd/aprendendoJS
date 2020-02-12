//1//
var c, n, s;
c = 10; s = 0;
while (c > 0) {
  n = parseFloat(prompt('Insira um número\n' + c + ' números restantes\n' + 'Soma: ' + s));
  s += n; //s=s+n
  c--;
}
alert('A soma de todos os números é ' + s);

//2//
var C, N, S, SQ, M;
S = 0; SQ = 0;
C = parseInt(prompt('Insira a quatidade de números'));
M = C;
N = parseInt(prompt('Insira o primeiro número'));
S += N;
SQ += N**2;
C--;
while (C > 0) {
  N = parseInt(prompt('Insira outro número'));
  S += N;
  SQ += N**2;
  C--;
}
M = S/M;
console.log(S,SQ,M);

//3//
var n = parseFloat(prompt('Número'));
while (n >= 0) {
  alert(n**2);
  n = parseFloat(prompt('Número'));
}

//4//
var X, Fx;
X = parseFloat(prompt('Insira um número para x em F(x)=x²-5x+6'));
while (X != 0) {
  Fx = X**2 - 5*X + 6;
  alert(Fx);
  X = parseFloat(prompt('Insira um número para X em F(x)=x²-5x+6'));
}

//5//
var NuM, NoM, PcM, QnM, Fat, FTo;
FTo = 0;
NuM = parseInt(prompt('Número de mercadorias comercializadas'));
while (NuM > 0) {
  NoM = prompt('Nome da mercadoria:');
  PcM = parseFloat(prompt('Preço unitário da mercadoria:'));
  QnM = parseInt(prompt('Número de ' + NoM + ' vendidas:'));
  Fat = PcM * QnM;
  FTo += Fat;
  NuM--;
}
alert(FTo);

//6//
var C;
C = 15;
while (C <= 200) {
  alert(C++**2);
}

//7//
var N, C;
N = parseInt(prompt('Número a ser multiplicado'));
C = 1;
while (C <= 10) {
  console.log(N + ' x ' + C + ' = ' + N*C++);
}

//8//
var C, S;
C = 1; S = 0;
while (C <= 500) {
  if (C%2 == 0) S += C;
  C++;
}
alert(S);

//9//
var C, I;
C = 0; I = '';
while (C <= 20) {
  if (C%2 != 0) I += C + '\n';
  C++;
}
alert(I);

//10//
var P = 0;
while (P <= 15) {
  alert(3**P++);
}

//11//
var N, F;
N = parseInt(prompt('Digite um número'));
F = (N >= 0) ? 1: 'invalid';
while (N > 0) F *= N--;
alert(F);

//12//
var H, N;
H = 0;
N = parseInt(prompt('Número de N de divisões'));
while (N > 0) {
  H += 1/N--;
}
alert(H);

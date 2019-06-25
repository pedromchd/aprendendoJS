//2012 F2 CHOCOLATE
var P, L;
L = parseInt(prompt('Insira o lado L(cm) do chocolate:'));
P = L
while (L >= 2) {
  L /= 2;
}
P = P**2/L**2;
alert(P);

//2017 F2 CARTAS
var A, B, C, D;
A = parseInt(prompt('Primeira carta virada:'));
B = parseInt(prompt('Segunda carta virada:'));
C = parseInt(prompt('Terceira carta virada:'));
if (A == B) D = C;
if (A == C) D = B;
if (B == C) D = A;
alert(D);

//2013 F2 VOLUME DA TV
var V, T, A, F;
V = parseInt(prompt('Volume inicial:'));
F = V;
T = parseInt(prompt('Número de modificações de volume:'));
while (T > 0) {
  A = parseInt(prompt('Alterações de voume feitas:'));
  F += A;
  if (F > 100) F = 100;
  if (F < 0) F = 0;
  T--;
}
alert(F);

//1//
function condition() {
  N = [], U = [], L = [];
  for (var I = 0, J = 65, K = 97; K <= 122; I++, J++, K++) {
    N.push(String(I%10));
    U.push(String.fromCharCode(J));
    L.push(String.fromCharCode(K));
  }
}
function verify(C) {
  var n, u, l;
  (N.indexOf(C) != -1) ? n = true : n = false;
  (U.indexOf(C) != -1) ? u = true : u = false;
  (L.indexOf(C) != -1) ? l = true : l = false;
  if (n) nN = 1;
  if (u) nU = 1;
  if (l) nL = 1;
  return n || u || l
}
var P, N, U, L, p, O, nN, nU, nL;
P = prompt('Insira uma senha:');
p = false;
nN = 0, nU = 0, nL = 0, O = 0;
condition();
if (P.length >= 6 && P.length <= 16) {
  p = true;
  for (var J = 0; J < P.length; J++) {
    if (!verify(P[J])) {
      p = false;
      break;
    }
  }
}
O = nN + nU + nL;
if (!p || O != 3) alert('Senha Inválida!');
else alert('Senha Válida!');

//2//


//3//

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
  return n || u || l
}
var P, N, U, L, p;
P = prompt('Insira uma senha:');
p = false;
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
if (!p) alert('Senha Inválida!');
else alert('Senha Válida!');
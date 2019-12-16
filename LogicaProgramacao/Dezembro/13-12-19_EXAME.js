//1//
function verify() {
  N = [], U = [], L = [];
  for (var I = 0, J = 65, K = 97; K <= 122; I++, J++, K++) {
    N.push(I%10);
    U.push(String.fromCharCode(J));
    L.push(String.fromCharCode(K));
  }
}
var P, N, U, L;
P = prompt('Insira uma senha:');

//PJ 2018 F3 PULO
var N, C, L, H, P;
N = parseInt(prompt('Número de lajotas:'));
for (C = N, L = ''; C > 0; C--) {
  L += prompt('1 para preto, 0 para branco \n' + L);
}
for (H = 0, P = 0; H < L.length; ) {
  if (L[H] == '0') {
    if (L[H+1] == '0') {
      alert(-1);
      break;
    }
  }
  H++;
  if (L[H] == '1') {
    if (L[H+1] == '0') {
      P++;
    } else {
      H++; P++;
    }
  } else
}

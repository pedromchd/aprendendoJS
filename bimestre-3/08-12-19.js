//PJ 2018 F3 PULO
var N, C, J, H, B;
N = parseInt(prompt('Número de lajotas:'));
for (C = ''; N > 0; N--) {
  C += prompt('Cor da lajota:');
}
for (H = 0, B = 0; H < N; H++) {
  if (C[H] == 0) {
    if (B == 2) {
      alert('-1');
      break;
    }
    B++;
  } else {
    P++;
  }
}
alert(J);
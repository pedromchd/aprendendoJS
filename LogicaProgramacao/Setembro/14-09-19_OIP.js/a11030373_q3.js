function main() {
  var H, N, L, C, T, P;
  H = parseInt(prompt());
  N = parseInt(prompt());
  P = 0;
  while (H >= 2) {
    for (C = H, L = 1, T = 0; C > 0; C--) {
      T += L++;
    }
    if (T <= N) {
      N -= T;
      P++;
    } else {
      H--;
    }
  }
  console.log(P);
  console.log(N);
}

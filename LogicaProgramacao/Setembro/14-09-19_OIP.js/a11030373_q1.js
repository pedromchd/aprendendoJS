function main() {
  var X, N, M, L, D;
  X = parseInt(prompt());
  for (L = 0, D = 0; X > 0; X--) {
    N = parseInt(prompt());
    M = parseInt(prompt());
    if (L != 0) {
      N += L;
      L = 0;
    }
    if (N < M) {
      L += N;
    } else {
      D += parseInt(N/M);
      L += N%M;
    }
  }
  console.log(D);
}

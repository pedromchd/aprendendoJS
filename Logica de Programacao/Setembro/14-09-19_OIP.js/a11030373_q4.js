function main() {
  var A, L1, L2, N;
  A = parseInt(prompt());
  for (L1 = 1, N = 0; L1 <= A; L1++) {
    for (L2 = A; L2 > 0; L2--) {
      if (L1*L2 == A) {
        N++;
      }
    }
  }
  console.log(N);
}

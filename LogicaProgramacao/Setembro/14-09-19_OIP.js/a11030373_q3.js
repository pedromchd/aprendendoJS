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

function main() {
  var H, N, P, Q;
  H = parseInt(prompt());
  N = parseInt(prompt());
  Q = 0;
  while (H >= 2) {
    P = H * (H + H%2)/2 + Math.abs(H%2 - 1) * (H + H%2)/2;
    (P <= N) ? N -= P + 0 * Q++ : H--;
  }
  console.log(Q);
  console.log(N);
}

/*
1 = 1 * 1
2 = 2 * 1 + 1
3 = 3 * 2
4 = 4 * 2 + 2
5 = 5 * 3
6 = 6 * 3 + 3
*/
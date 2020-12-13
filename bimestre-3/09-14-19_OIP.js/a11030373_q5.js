function main() {
  var T, C, D, R;
  T = parseInt(prompt());
  D = parseInt(prompt());
  for (R = 0, C = T; C > T*0.4; C -= C*D/100) {
    R++;
  }
  console.log(R);
}

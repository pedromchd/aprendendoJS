//BOT PROB
var N = Math.ceil(Math.random() * 10);
for (var I = 0, V = []; I < N; I++) {
  var S = Math.round(Math.random());
  V.push(S);
}
N = Math.floor(Math.random() * N);
S = V[N];
console.log(V,S);
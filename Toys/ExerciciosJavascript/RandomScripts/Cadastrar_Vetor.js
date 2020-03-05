var S, V;
V = [];
do {
  S = prompt();
  if (S == '') continue; else V[V.length] = S;
} while (S != '');
console.log(V);
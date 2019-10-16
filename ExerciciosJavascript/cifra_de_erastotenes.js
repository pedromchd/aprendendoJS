//CRIVO DE ERASTÓTENES
//FUNCTION
function verificaMultiplo(vetor,multi) {
  for (var I = multi + 1; I < vetor.length; I++) {
    if (vetor[I] == true && I%multi == 0) {
      vetor[I] = false;
    }
  }
}
function mostraPrimo(vetor) {
  var I, A;
  for (I = 2, A = []; I < vetor.length; I++) {
    if (vetor[I] == true) {
      A.push(vetor.indexOf(true,2));
      vetor[I] = false;
    }
  }
  return A;
}
var V, I;
V = [];
V.length = 100;
V.fill(true);
for (I = 2; I < 10; I++) {
  verificaMultiplo(V,I);
}
console.log(mostraPrimo(V));

//SEM FUNCTION
var V, I, J, A;
V = [];
V.length = 100;
V.fill(true);
for (I = 2; I < 10; I++) {
  for (var J = I + 1; J < V.length; J++) {
    if (V[J] == true && J%I == 0) {
      V[J] = false;
    }
  }
}
for (I = 2, A = []; I < V.length; I++) {
  if (V[I] == true) {
    A.push(V.indexOf(true,2));
    V[I] = false;
  }
}
console.log(A);
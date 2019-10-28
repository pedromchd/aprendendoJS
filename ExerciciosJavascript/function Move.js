function somaIguais(aux) {
  for (var C = aux.length - 1; C >= 0; C--) {
    if (aux[C] == aux[C - 1] && aux[C] != '_') {
      aux.unshift('_');
      aux[C] = aux[C] + aux[C];
      aux.splice(C + 1, 1);
    }
  }
}
function movimento(tabuleiro,aux,I) {
  aux = [];
  for (var J = 0; J < 4; J++) {
    if (tabuleiro[I][J] != '_') {
      aux.push(tabuleiro[I][J]);
      somaIguais(aux);
    }
  }
  tabuleiro[I] = tabuleiro[I].concat(aux);
  for (J = 3; J >= 0; J--) {
    if (tabuleiro[I][J] != '_') {
      tabuleiro[I].splice(J,1);
    }
  }
}
function movimDireita(tabuleiro) {
  var aux;
  for (var I = 0; I < 4; I++) {
    movimento(tabuleiro,aux,I);
  }
}
function movimEsquerda(tabuleiro) {
  var aux;
  for (var I = 0; I < 4; I++) {
    tabuleiro[I].reverse();
    movimento(tabuleiro,aux,I);
    tabuleiro[I].reverse();
  }
}
function movimCima(tabuleiro) {
  var aux;
  var tabulaux = [[],[],[],[]];
  for (var I = 0; I < 4; I++) {
    for (var J = 0; J < 4; J++) {
      tabulaux[I].push(tabuleiro[J][I]);
    }
  }
  for (I = 0; I < 4; I++) {
    tabulaux[I].reverse();
    movimento(tabulaux,aux,I);
    tabulaux[I].reverse();
  }
  for (var I = 0; I < 4; I++) {
    for (var J = 0; J < 4; J++) {
      tabuleiro[I].push(tabulaux[J][I]);
      tabuleiro[I].shift();
    }
  }
}
function movimBaixo(tabuleiro) {
  var aux;
  var tabulaux = [[],[],[],[]];
  for (var I = 0; I < 4; I++) {
    for (var J = 0; J < 4; J++) {
      tabulaux[I].push(tabuleiro[J][I]);
    }
  }
  for (I = 0; I < 4; I++) {
    movimento(tabulaux,aux,I);
  }
  for (var I = 0; I < 4; I++) {
    for (var J = 0; J < 4; J++) {
      tabuleiro[I].push(tabulaux[J][I]);
      tabuleiro[I].shift();
    }
  }
}
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

/*
var T, P, J;
alert('Mova e some os números iguais até chegar em 2048! \nDigite W,A,S,D para mover os números para cima, esquerda, baixo e direita, respectivamente. \nDigite R para resetar o jogo.');
J = undefined;
do {
  if (J == 'R' || J == undefined) {
    P = 0;
    T = [['_','_','_','_'],['_','_','_','_'],['_','_','_','_'],['_','_','_','_']];
    renovaTab(T);
    renovaTab(T);
  }
  do {
    J = prompt('Pontuação: ' + P + '\n' + mostraTab(T) + '\nDigite as letras respectivos aos movimentos').trim().toUpperCase();
  } while (['W','A','S','D','R'].indexOf(J) == -1);
  switch(J) {
    case 'W':
      moveCima(T);
      renovaTab(T);
      break;
    case 'A':
      moveEsq(T)
      renovaTab(T);
      break;
    case 'S':
      moveBaixo(T)
      renovaTab(T);
      break;
    case 'D':
      moveDir(T)
      renovaTab(T);
  }
} while (J != 'N');
*/

/*
function mostraTab(tabu) {
  var tabu_aux = [];
  for (var L = 0; L < 4; L++) {
    tabu_aux[L] = tabu[L].join('  ');
  }
  return tabu_aux.join('\n');
}
for (L = 0; L < 4; L++) {
  for (C = 0; C < 4; C++) {
    var len = tabu_aux[L][C].length;
    if (len < M) {
      tabu_aux[L][C] = ' '.repeat(M - len) + tabu_aux[L][C];
    }
  }
}
*/
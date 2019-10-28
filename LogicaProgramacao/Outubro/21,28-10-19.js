/*******************
Antonella M. Cuello
Pedro Garcia Machado
Logica Prog. - 4oBim
Profa Raquel Barbosa
********************/

//2048
function sortNum() {
  var sort = Math.floor(Math.random() * 4);
  return sort;
}
function swapTab(tabu,tabu_aux) {
  for (var L = 0; L < 4; L++) {
    for (var C = 0; C < 4; C++) {
      tabu_aux[C][L] = tabu[L][C];
    }
  }
}
function reverseTab(tabu) {
  for (var L = 0; L < 4; L++) {
    tabu[L].reverse();
  }
}
function somaTab(tabu) {
  for (var L = 0; L < 4; L++) {
    for (var C = 3; C >= 0; C--) {
      if (tabu[L][C] == tabu[L][C + 1] && tabu[L][C] != '_') {
        tabu[L][C] *= 2;
        tabu[L].splice(C + 1, 1);
        P += tabu[L][C];
        tabu[L].unshift('_');
      }
    }
  }
}
function renovaTab(tabu) {
  if (tabu.join().indexOf('_') != -1) {
    var sort = [2,2,2,4][sortNum()];
    do {
      var sL = sortNum();
      var sC = sortNum();
    } while (tabu[sL][sC] != '_');
    tabu[sL][sC] = sort;
  }
}
function moveDir(tabu) {
  for (var L = 0; L < 4; L++) {
    for (var C = 0; C < 4; C++) {
      if (tabu[L][C] == '_') {
        tabu[L].splice(C,1);
        tabu[L].unshift('_');
      }
    }
  }
  somaTab(tabu);
}
function moveEsq(tabu) {
  for (var L = 0; L < 4; L++) {
    for (var C = 3; C >= 0; C--) {
      if (tabu[L][C] == '_') {
        tabu[L].splice(C,1);
        tabu[L].push('_');
      }
    }
  }
  reverseTab(tabu);
  somaTab(tabu);
  reverseTab(tabu);
}
function moveCima(tabu) {
  var tabu_aux = [[],[],[],[]];
  swapTab(tabu,tabu_aux);
  for (var L = 0; L < 4; L++) {
    for (var C = 3; C >= 0; C--) {
      if (tabu_aux[L][C] == '_') {
        tabu_aux[L].splice(C,1);
        tabu_aux[L].push('_');
      }
    }
  }
  reverseTab(tabu_aux);
  somaTab(tabu_aux);
  reverseTab(tabu_aux);
  swapTab(tabu_aux,tabu);
}
function moveBaixo(tabu) {
  var tabu_aux = [[],[],[],[]];
  swapTab(tabu,tabu_aux);
  for (var L = 0; L < 4; L++) {
    for (var C = 0; C < 4; C++) {
      if (tabu_aux[L][C] == '_') {
        tabu_aux[L].splice(C,1);
        tabu_aux[L].unshift('_');
      }
    }
  }
  somaTab(tabu_aux);
  swapTab(tabu_aux,tabu);
}
function mostraTab(tabu) {
  var tabu_aux = [[],[],[],[]];
  var tab_aux = [[],[],[],[]];
  swapTab(tabu,tabu_aux);
  for (var L = 0; L < 4; L++) {
    for (var C = 0; C < 4; C++) {
      tabu_aux[L][C] = tabu_aux[L][C].toString();
    }
  }
  for (var M = undefined, L = 0; L < 4; L++) {
    for (C = 0; C < 4; C++) {
      if (M == undefined) {
        M = tabu_aux[L][C].length;
      } else if (tabu_aux[L][C].length > M) {
        M = tabu_aux[L][C].length;
      }
    }
  }
  for (L = 0; L < 4; L++) {
    for (C = 0; C < 4; C++) {
      var len = tabu_aux[L][C].length;
      if (len < M) {
        if (tabu_aux[L][C] == '_') {
          tabu_aux[L][C] = '_'.repeat(M - len) + tabu_aux[L][C];
        } else {
          tabu_aux[L][C] = switchTab().repeat(M - len) + tabu_aux[L][C];
        }
      }
    }
  }
  swapTab(tabu_aux,tab_aux);
  for (L = 0; L < 4; L++) {
    tab_aux[L] = tab_aux[L].join('  ');
  }
  return tab_aux.join('\n');
}
function switchTab() {
  var config;
  switch (V) {
    case 0:
    config = ' ';
    break;
    case 1:
    config = '  ';
    break;
    case 2:
    config = '0';
    break;
    case 3:
    config = '_';
  }
  return config;
}
function WinOrLose (tabu) {
  for (var L = 0; L < 4; L++) {
    if (tabu[L].indexOf(2048) != -1) {
      return true;
    }
  }
}
var T, P, V;
P = 0; 
V = 0;
T = [['_','_','_','_'],['_','_','_','_'],['_','_','_','_'],['_','_','_','_']];
alert('Para se movimentar no jogo você irá usar as teclas: ' + '\nW ou 8 - ↑ (para CIMA);' + '\nA ou 4 - ← (para a ESQUERDA);' + '\nS ou 2 - ↓ (para BAIXO);' + '\nD ou 6 - → (para a DIREITA).' + '\nDigite R ou 0 para resetar o jogo. \nDigite V ou 5 para mudar a visualização do tabuleiro');
renovaTab(T);
renovaTab(T);
do {		
	do {
		var moves = prompt('PONTUAÇÃO: ' + P + '\n' + mostraTab(T) + '\n' + '\Digite os números ou letras dos  respectivos movimentos: ').trim().toUpperCase();
    if (!isNaN(moves)) {
      moves = parseInt(moves);
    }
    if (moves == 'V' || moves == 5) {
      V = ++V%4;
    }
	} while (['W','A','S','D','R','V',8,4,2,6,0,5].indexOf(moves) == -1);
  switch (moves) {
    case 'W': case 8: 
      moveCima(T);
      break;
    case 'A': case 4:
      moveEsq(T);
      break;
    case 'S': case 2:
      moveBaixo(T);
      break;
    case 'D': case 6: 
      moveDir(T);
      break;
    case 'R': case 0:
      P = 0;
      T = [['_','_','_','_'],['_','_','_','_'],['_','_','_','_'],['_','_','_','_']];
      renovaTab(T);
  }
  renovaTab(T);
} while (moves != 'N');

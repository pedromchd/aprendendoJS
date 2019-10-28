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
  switch (O) {
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
var T, P;
P = 0;
T = [['_','_','_','_'],['_','_','_','_'],['_','_','_','_'],['_','_','_','_']];
O = 0;

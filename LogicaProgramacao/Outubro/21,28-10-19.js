/*******************
Antonella M. Cuello
Pedro Garcia Machado
Logica Prog. - 4oBim
Profa Raquel Barbosa
*******************/

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
  if (tabu.join(',').indexOf(2048) != -1) {
    return true;
  }
  if (tabu.join(',').indexOf('_') == -1) {
    var tab1_aux = tabu.join('').replace(/,/g,'').split('');
    var tab2_aux = tabu.join('').replace(/,/g,'').split('');
    var tab3_aux = tabu.join(',').split(',');
    for (C = 0; C < tab2_aux.length; C++) {
      if (tab2_aux[C] == '_') {
        tab2_aux.splice(C,1);
        tab2_aux.unshift('_');
      }
    }
    if (tab1_aux.join('') == tab2_aux.join('')) {
      moveCima(tabu);
      moveEsq(tabu);
      moveBaixo(tabu);
      moveDir(tabu);
      var tab1_aux = tabu.join('').replace(/,/g,'').split('');
      var tab2_aux = tabu.join('').replace(/,/g,'').split('');
      for (C = 0; C < tab2_aux.length; C++) {
        if (tab2_aux[C] == '_') {
          tab2_aux.splice(C,1);
          tab2_aux.unshift('_');
        }
      }
      if (tab1_aux.join('') == tab2_aux.join('')) {
        return false;
      }
    }
    for (var I = 0, L = 0; L < 4; L++) {
      for (var C = 0; C < 4; C++, I++) {
        tabu[L][C] = parseInt(tab3_aux[I]);
      }
    }
  }
}
do {
  var T, P, V;
  P = 0; 
  V = 0;
  T = [['_','_','_','_'],['_','_','_','_'],['_','_','_','_'],['_','_','_','_']];
  do {
    var menu = parseInt(prompt('𝑩𝒆𝒎-𝒗𝒊𝒏𝒅𝒐 𝒂𝒐 𝟐𝟎𝟒𝟖!   (◡‿◡✿)' + '\n▸ Digite 1 para ver as regras;' + '\n▸ Digite 2 para ver os controles;' + '\n▸ Digite 3 para jogar.'));
    switch (menu) {
      case 1:
        alert('Como jogar?   (。⌒∇⌒)。' + '\n▸ Use as setas do teclado para movimentar os blocos;' + '\n▸ Quando dois blocos de números iguais se chocam, eles viram um só com valor igual a soma dos dois;' + '\n▸ A cada movimento é acrescentado um bloco com valor 2 ou com valor 4 (menor probabilidade);' + '\n▸ Você ganha quando conseguir um bloco no valor de 2048 (por isso o nome).');
        break;
      case 2:
        alert('E os controles?   。(⌒∇⌒。)' + '\n▹ W ou 8 : ↑ (para CIMA);' + '\n▹ A ou 4 : ← (para a ESQUERDA);' + '\n▹ S ou 2 : ↓ (para BAIXO);' + '\n▹ D ou 6 : → (para a DIREITA).' + '\n▹ Digite R ou 0 para resetar o jogo.' + '\n▹ Digite V ou 5 para mudar a visualização do tabuleiro.');
        break;
      case 3:
        break;
    }
  } while (menu != 3);
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
    } while (['W','A','S','D','R',8 ,4 ,2 ,6 ,0].indexOf(moves) == -1);
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
        V = 0;
        T = [['_','_','_','_'],['_','_','_','_'],['_','_','_','_'],['_','_','_','_']];
        renovaTab(T);
    }
    renovaTab(T);
  } while (WinOrLose(T) === undefined);
  if (WinOrLose(T) == true) {
    alert(mostraTab(T) + '\nVocê ganhou!   ヽ(⌒∇⌒)ﾉ');
  } 
  if (WinOrLose(T) == false) {
    alert(mostraTab(T) + '\nVocê perdeu!   o(╥﹏╥)o');
  }
  do {
    var PlayAgain = prompt('➮ Deseja jogar novamente? (/•ิ_•ิ)/" + "\n(Responda com S ou N)').toUpperCase();
  } while (PlayAgain != 'S' && PlayAgain != 'N');
} while (PlayAgain != 'N');
alert("FIM DE JOGO! ヽ(⊙０⊙)ノ" + "\n" + "\nObrigada por jogar!" + "\n" + "\nCRIADO POR: Antonella Cuello e Pedro Machado  (つ▀¯▀)つ");
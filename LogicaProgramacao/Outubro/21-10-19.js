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
function mostraTab(tabu) {
  return tabu.join('\n');
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
    for (var C = 0; C < 4; C++) {
      if (tabu[L][C] == tabu[L][C + 1] && tabu[L][C] != '_') {
        tabu[L].splice(C, 1);
        tabu[L][C] *= 2;
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
var T, P;
P = 0;
T = [['_','_','_','_'],['_','_','_','_'],['_','_','_','_'],['_','_','_','_']];
//agora é tudo por ti

//moveDir(T);
//moveEsq(T);
//moveCima(T);
//moveBaixo(T);
renovaTab(T);
console.log(mostraTab(T),P);

/* O QUE FALTA
Interface para jogar, utilizando ou WASD ou 8426 (tu que sabe);
Validação no prompt pra não ser nada além do WASD/8426;
Pontuação (mostrar ela);
Opção resetar o jogo;
Não precisa mexer em mais nada nas functions, agora é so montar o jogo em siblingAbove
Falta ainda uma function, vitória ou derrota, vitória se chegar em 2048 derrota se tiver tudo cheio e n ter como somar mais nada
*/
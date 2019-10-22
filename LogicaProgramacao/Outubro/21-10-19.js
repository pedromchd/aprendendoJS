//2048
function sortNum() {
  var sort = Math.floor(Math.random() * 4);
  return sort;
}
function mostraTab(tabu) {
  return tabu.join('\n');
}
function swapTab(tabu,tabu_aux) {
  for (var I = 0; I < 4; I++) {
    for (var J = 0; J < 4; J++) {
      tabu_aux[J][I] = tabu[I][J];
    }
  }
}
function renovaBloco(tabu) {
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
  for (var I = 0; I < 4; I++) {
    for (var J = 0; J < 4; J++) {
      if (tabu[I][J] == '_') {
        tabu[I].splice(J,1);
        tabu[I].unshift('_');
      }
    }
  }
}
function moveEsq(tabu) {
  for (var I = 0; I < 4; I++) {
    for (var J = 3; J >= 0; J--) {
      if (tabu[I][J] == '_') {
        tabu[I].splice(J,1);
        tabu[I].push('_');
      }
    }
  }
}
function moveCima(tabu) {
  var tabu_aux = [[],[],[],[]];
  swapTab(tabu,tabu_aux);
  for (var I = 0; I < 4; I++) {
    for (var J = 3; J >= 0; J--) {
      if (tabu_aux[I][J] == '_') {
        tabu_aux[I].splice(J,1);
        tabu_aux[I].push('_');
      }
    }
  }
  swapTab(tabu_aux,tabu);
}
function moveBaixo(tabu) {
  var tabu_aux = [[],[],[],[]];
  swapTab(tabu,tabu_aux);
  for (var I = 0; I < 4; I++) {
    for (var J = 0; J < 4; J++) {
      if (tabu_aux[I][J] == '_') {
        tabu_aux[I].splice(J,1);
        tabu_aux[I].unshift('_');
      }
    }
  }
  swapTab(tabu_aux,tabu);
}
var T;
T = [['_','_','_','_'],['_','_','_','_'],['_','_','_','_'],['_','_','_','_']];
//T = [[2,'_','_','_'],['_',4,'_','_'],['_','_',8,'_'],['_','_','_',16]];

renovaBloco(T);
mostraTab(T);

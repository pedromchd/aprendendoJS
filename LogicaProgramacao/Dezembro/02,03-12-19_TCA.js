/*********************************
 * Pedro Garcia Machado - 11030373
 * Lógica de Progra. - 4o Bimestre
 * Profa Raquel de Miranda Barbosa
*********************************/

//TRABALHO DE CONCLUSÃO DE ANO: "Jogo da Memória"
function buildTab(opt) {
  var tab;
  tab = [['❏','❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏','❏']];
  tab.length = 2 + opt;
  for (var I = 0; I < tab.length; I++) {
    tab[I].length = 3 + opt;
  }
  return tab;
}
function fillTab(tab,chr) {
  var lin, col, aux, his;
  his = [];
  while (tab.join().indexOf('❏') != -1) {
    do {
      aux = chr[Math.floor(Math.random() * 30)];
    } while (his.indexOf(aux) != -1);
    his.push(aux);
    for (J = 0; J < 2; J++) {
      do {
        lin = Math.floor(Math.random() * tab.length);
        col = Math.floor(Math.random() * tab[0].length);
      } while (tab[lin][col] != '❏');
      tab[lin][col] = aux;
    }
  }
}
function showTab(tab,opt) {
  var aux = [];
  lin = ['A','B','C','D','E','F'];
  col = ['1','2','3','4','5','6','7'];
  lin.length = 2 + opt;
  col.length = 3 + opt;
  col = '  ' + col.join('   ');
  for (var I = 0; I < tab.length; I++) {
    aux[I] = lin[I] + ' ' + tab[I].join(' ');
  }
  return col + '\n' + aux.join('\n');
}
function revealTab(tab,hid,pos) {
  var Y = pos[0];
  var X = pos[1];
  tab[Y][X] = hid[Y][X];
  return tab[Y][X];
}
function pickPiece(tab,opt) {
  var pos, lin, col, pes;
  lin = ['A','B','C','D','E','F'];
  col = ['1','2','3','4','5','6','7'];
  lin.length = 2 + opt;
  col.length = 3 + opt;
  pes = [];
  for (var I = 0; I < lin.length; I++) {
    for (var J = 0; J < col.length; J++) {
      pes.push(lin[I] + col[J]);
      pes.push(col[J] + lin[I]);
    }
  }
  do {
    do {
      pos = prompt(showTab(tab,opt) + '\nEscolha uma posição:').trim().toUpperCase();
    } while (pes.indexOf(pos) == -1);
    if (!isNaN(parseInt(pos)) == true) {
      pos = pos[1] + parseInt(pos);
    }
    var Y = lin.indexOf(pos[0]);
    var X = col.indexOf(pos[1]);
  } while (tab[Y][X] != '❏');
  return [Y,X];
}
function verifyWin(tab) {
  if (tab.join().indexOf('❏') == -1) {
    return true;
  } else {
    return false;
  }
}
function verifyPieces(tab,pos1,pos2,opt) {
  if (pos1 != pos2) {
    alert(showTab(tab,opt));
    for (var I = 0; I < tab.length; I++) {
      tab[I] = tab[I].join().replace(pos1,'❏').split(',');
      tab[I] = tab[I].join().replace(pos2,'❏').split(',');
    }
  }
}
function mainMenu() {
  do {
    var men = prompt('Bem vindo ao Jogo da Memória!! \n\nENTER - Jogar \nR - Regras \nC - Créditos \nS - Sair').trim().toUpperCase();
    if (men == 'R') {
      alert('No Jogo da memória, você deve encontrar pares de figuras escondidos em um tabuleiro de 3 dificuldades, forme todos e vença o jogo, utilizando de sua concentração e memória!');
    }
    if (men == 'C') {
      alert('JOGO DA MEMÓRIA: \nDesenvolvido por Pedro Garcia Machado \nVersão Dezembro de 2019');
    }
  } while (men != '' && men != 'S');
  if (men == '') return true;
  else return false;
}
function mainGame() {
  var C, O, H, T, P1, P2;
  C = ['✞','✰','◆','△','☂','★','☃','☢','☭','♘','♟','❖','❤','✄','☎','☠','✈','❡','☀','☁','✪','◎','✔','☯','Ω','♛','✿','✎','▼','♔'];
  do {
    O = parseInt(prompt('Selecione a dificuldade: \n1 - FÁCIL (6 pares) \n2 - MÉDIO (10 pares) \n3 - DIFÍCIL (15 pares)'));
  } while ([1,2,3].indexOf(O) == -1);
  H = buildTab(O);
  T = buildTab(O);
  fillTab(H,C);
  do {
    P1 = pickPiece(T,O);
    P1 = revealTab(T,H,P1);
    P2 = pickPiece(T,O);
    P2 = revealTab(T,H,P2);
    verifyPieces(T,P1,P2,O);
  } while (verifyWin(T) == false);
  alert(showTab(T,O) + '\nParabéns, você venceu o jogo!!');
  do {
    G = prompt('Deseja jogar novamente? \n[S] - Selecionar uma nova dificuldade e jogar novamente \n[N] - Sair do jogo e retornar ao menu principal').trim().toUpperCase();
  } while (G != 'S' && G != 'N');
}
//JOGO DA MEMÓRIA
var G;
do {
  do {
    var M = mainMenu();
    if (M == false) {
      M = prompt('Deseja sair de Jogo da Memória? [S]/[N]').trim().toUpperCase();
    } else {
      break;
    }
  } while (M != 'S');
  if (M != true) {
    alert('Jogo da Memória 2019 \nDesevolvido por Pedro Machado \nObrigador por jogar!! ❤❤');
    break;
  }
  alert('Use de coordenandas para selecionar a figura a revelar!')
  do {
    do {
      M = parseInt(prompt('Selecione o modo de jogo \n1 - Singleplayer \n2 - Multiplayer \n3 - Versus PC \n*Nas opções 2 e 3, haverá um único modo de dificuldade de 21 pares.'));
    } while ([1,2,3].indexOf(M) == -1)
    mainGame();
  } while (G == 'S');
} while (G == 'N');

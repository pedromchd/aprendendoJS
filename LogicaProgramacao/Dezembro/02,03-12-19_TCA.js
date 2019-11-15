/*********************************
 * Pedro Garcia Machado - 11030373
 * Lógica de Progra. - 4o Bimestre
 * Profa Raquel de Miranda Barbosa
*********************************/

//TRABALHO DE CONCLUSÃO DE ANO: "Jogo da Memória"
function mainMenu() {
  do {
    var men = prompt('JOGO DA MEMÓRIA!! \nENTER - Jogar \nR - Regras \nC - Créditos \nS - Sair').trim().toUpperCase();
    if (men == 'R') {
      alert('No Jogo da memória, você deve encontrar pares de figuras escondidos em um tabuleiro de 3 dificuldades, forme todos e vença o jogo, utilizando de sua concentração e memória! \nUse de coordenandas para selecionar a figura a revelar!');
    }
    if (men == 'C') {
      alert('JOGO DA MEMÓRIA: \nDesenvolvido por Pedro Garcia Machado \nVersão Dezembro de 2019');
    }
  } while (men != '' && men != 'S');
  if (men == '') {
    return M = true;
  }
  if (men == 'S') {
    return M = false;
  }
}
function miniMenu() {
  switch(M) {
    case 2:
      do {
        N1 = prompt('Digite o nome do PLAYER 1 (máximo 10 letras)').trim().toLowerCase().split('');
        N1.length = 10;
        N1 = N1.join('').replace(N1[0],N1[0].toUpperCase());
      } while (N1 == '');
      do {
        N2 = prompt('Digite o nome do PLAYER 2 (máximo 10 letras)').trim().toLowerCase().split('');
        N2.length = 10;
        N2 = N2.join('').replace(N2[0],N2[0].toUpperCase());
      } while (N2 == '');
    case 3:
      S1 = 0;
      S2 = 0;
    default:
      do {
        O = parseInt(prompt('Selecione a dificuldade: \n1 - FÁCIL (6 pares) \n2 - MÉDIO (10 pares) \n3 - DIFÍCIL (15 pares) \n4 - EXPERT (21 pares)'));
      } while ([1,2,3,4].indexOf(O) == -1);
  }
  if (M != 2) {
    N1 = '';
    N2 = '';
  }
}
function buildTab(opt) {
  var tab = [['❏','❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏','❏']];
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
function turnPlayer() {
  switch(M) {
  case 2:
    if (V%2 == 0) {
      return '\nSua vez, ' + N1 + '. Pares combinados: ' + S1 + '\n';
    } else {
      return '\nSua vez, ' + N2 + '. Pares combinados: ' + S2 + '\n';
    }
    break;
  case 3:
    return '\nPares combinados: ' + S1 + '\n';
    break;
  default:
    return '\n';
  }
}
function probPiece(lin,col,opt) {
  var aux = [];
  lin.length = 2 + opt;
  col.length = 3 + opt;
  for (var I = 0; I < lin.length; I++) {
    for (var J = 0; J < col.length; J++) {
      aux.push(lin[I] + col[J]);
      aux.push(col[J] + lin[I]);
    }
  }
  return pes = aux;
}
function pickPiece(tab) {
  var lin, col, pos;
  lin = ['A','B','C','D','E','F'];
  col = ['1','2','3','4','5','6','7'];
  probPiece(lin,col,O);
  do {
    if (M == 3 && V%2 != 0) {
      pos = pes[Math.floor(Math.random() * pes.length)];
    } else {
      do {
        pos = prompt(showTab(tab,O) + turnPlayer() + 'Escolha uma posição:').trim().toUpperCase();
      } while (pes.indexOf(pos) == -1);
    }
    if (!isNaN(parseInt(pos)) == true) {
      pos = pos[1] + parseInt(pos);
    }
    var Y = lin.indexOf(pos[0]);
    var X = col.indexOf(pos[1]);
  } while (tab[Y][X] != '❏');
  return A = [Y,X];
}
function showPiece(tab,hid,aux) {
  var Y = aux[0];
  var X = aux[1];
  tab[Y][X] = hid[Y][X];
  return tab[Y][X];
}
function botProb() {
  var len, arr, srt, pos;
  len = Math.ceil(Math.random() * 10);
  for (var I = 0, arr = []; I < len; I++) {
    srt = Math.round(Math.random());
    arr.push(srt);
  }
  pos = Math.floor(Math.random() * len);
  return M == 3 && V%2 != 0 && Boolean(arr[pos]);
}
function botPick() {
  var aux;
  T = T.join('.');
  H = H.join('.');
  aux = H.indexOf(P1);
  if (T[aux] != '❏') {
    aux = H.lastIndexOf(P1);
  }
  T = T.split('');
  T[aux] = P1;
  T = T.join('');
  T = T.split('.');
  H = H.split('.');
  for (var I = 0; I < T.length; I++) {
    T[I] = T[I].split(',');
    H[I] = H[I].split(','); 
  }
  P2 = P1;
}
function verifyPieces(tab,pos1,pos2) {
  if (pos1 != pos2) {
    alert(showTab(tab,O));
    for (var I = 0; I < tab.length; I++) {
      tab[I] = tab[I].join().replace(pos1,'❏').split(',');
      tab[I] = tab[I].join().replace(pos2,'❏').split(',');
    }
  } else {
    (V%2 == 0) ? S1++ : S2++;
    V--;
  }
}
function verifyFull(tab) {
  if (tab.join().indexOf('❏') != -1) {
    return true;
  }
}
function verifyWin() {
  switch(M) {
    case 3:
      N2 = 'PC';
    case 2:
      if (S1 > S2) {
        alert(showTab(T,O) + '\n' + N1 + ' venceu o jogo com ' + S1 + ' pares combinados contra ' + S2 + ' de ' + N2 + '!');
      }
      if (S1 < S2) {
        alert(showTab(T,O) + '\n' + N2 + ' venceu o jogo com ' + S2 + ' pares combinados contra ' + S1 + ' de ' + N1 + '!');
      }
      if (S1 == S2) {
        alert(showTab(T,O) + '\n' + N1 + ' e ' + N2 + ' empataram com ' + S1 + ' pares combinados!');
      }
      break;
    default:
      alert(showTab(T,O) + '\nParabéns, você venceu o jogo!!');
  }
}
function mainGame() {
  var pes;
  V = Math.round(Math.random());
  C = ['✞','✰','◆','△','☂','★','☃','☢','☭','♘','♟','❖','❤','✄','☎','☠','✈','❡','☀','☁','✪','◎','✔','☯','Ω','♛','✿','✎','▼','♔'];
  miniMenu();
  H = buildTab(O);
  T = buildTab(O);
  fillTab(H,C);
  do {
    if (M == 3 && V%2 != 0) {
      alert(showTab(T,O) + '\nVez do PC. Pares combinados: ' + S2);
    }
    pickPiece(T);
    P1 = showPiece(T,H,A);
    if (botProb()) {
      botPick();
    } else {
      pickPiece(T);
      P2 = showPiece(T,H,A);
    }
    verifyPieces(T,P1,P2);
    V++;
  } while (verifyFull(T));
  verifyWin();
  do {
    G = prompt('Deseja jogar novamente? [S]/[N]').trim().toUpperCase();
  } while (G != 'S' && G != 'N');
}
//JOGO DA MEMÓRIA
var M, G;
do {
  do {
    mainMenu();
    if (M == false) {
      do {
        M = prompt('Deseja sair de Jogo da Memória? [S]/[N]').trim().toUpperCase();
      } while (M != 'S' && M != 'N');
    } else {
      break;
    }
  } while (M != 'S');
  if (M != true) {
    alert('Jogo da Memória v2019. \nDesevolvido por Pedro Machado. \nObrigador por jogar!! ❤❤');
    break;
  }
  do {
    M = parseInt(prompt('Selecione o modo de jogo: \n1 - Singleplayer \n2 - Multiplayer \n3 - Versus PC'));
  } while ([1,2,3].indexOf(M) == -1);
  do {
    var V, C, O, H, T, A, N1, N2, S1, S2, P1, P2;
    mainGame();
  } while (G == 'S');
} while (G == 'N');

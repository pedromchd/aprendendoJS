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
function showPiece(tab,hid,pos) {
  var Y = pos[0];
  var X = pos[1];
  tab[Y][X] = hid[Y][X];
  return tab[Y][X];
}
function probPiece(lin,col,opt) {
  pes = [];
  lin.length = 2 + opt;
  col.length = 3 + opt;
  for (var I = 0; I < lin.length; I++) {
    for (var J = 0; J < col.length; J++) {
      pes.push(lin[I] + col[J]);
      pes.push(col[J] + lin[I]);
    }
  }
  return pes;
}
function botPickPi(tab,opt) {
  var pos, lin, col, pes;
  lin = ['A','B','C','D','E','F'];
  col = ['1','2','3','4','5','6','7'];
  pes = probPiece(lin,col,opt);
  do {
    pos = pes[Math.floor(Math.random() * pes.length)];
    if (!isNaN(parseInt(pos)) == true) {
      pos = pos[1] + parseInt(pos);
    }
    var Y = lin.indexOf(pos[0]);
    var X = col.indexOf(pos[1]);
  } while (tab[Y][X] != '❏');
  return [Y,X];
}
function pickPiece(tab,opt,nom1,nom2,sco1,sco2,vez) {
  var pos, lin, col, pes;
  lin = ['A','B','C','D','E','F'];
  col = ['1','2','3','4','5','6','7'];
  pes = probPiece(lin,col,opt);
  do {
    do {
      pos = prompt(showTab(tab,opt) + turnPlayer(nom1,nom2,sco1,sco2,vez) + 'Escolha uma posição:').trim().toUpperCase();
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
function verifyPieces(tab,pos1,pos2,opt,sco1,sco2,vez) {
  if (pos1 != pos2) {
    alert(showTab(tab,opt));
    for (var I = 0; I < tab.length; I++) {
      tab[I] = tab[I].join().replace(pos1,'❏').split(',');
      tab[I] = tab[I].join().replace(pos2,'❏').split(',');
    }
  } else {
    (vez%2 == 0) ? sco1++ : sco2++;
  }
}
function turnPlayer(nom1,nom2,sco1,sco2,vez) {
  if (M == 2) {
    if (vez%2 == 0) {
      return '\nVez de ' + nom1 + '. Seus pontos: ' + sco1 + '\n';
    } else {
      return '\nVez de ' + nom2 + '. Seus pontos: ' + sco2 + '\n';
    }
  } else if (M == 3) {
    return '\nSeus pontos: ' + sco1 + '\n';
  } else {
    return '\n';
  }
}
function mainMenu() {
  do {
    var men = prompt('JOGO DA MEMÓRIA!! \nENTER - Jogar \nR - Regras \nC - Créditos \nS - Sair').trim().toUpperCase();
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
function miniMenu(N1,N2,S1,S2) {
  switch(M) {
    case 2:
      do {
        N1 = prompt('Digite o nome do PLAYER 1 (máximo 10 letras)').trim().toUpperCase().split('');
        N1.length = 10;
        N1 = N1.join('');
      } while (N1 == '');
      do {
        N2 = prompt('Digite o nome do PLAYER 2 (máximo 10 letras)').trim().toUpperCase().split('');
        N2.length = 10;
        N2 = N2.join('');
      } while (N2 == '');
    case 3:
      S1 = 0;
      S2 = 0;
      O = 4;
    break;
    default:
      do {
        O = parseInt(prompt('Selecione a dificuldade: \n1 - FÁCIL (6 pares) \n2 - MÉDIO (10 pares) \n3 - DIFÍCIL (15 pares)'));
      } while ([1,2,3].indexOf(O) == -1);
  }
  if (N1 == undefined && N2 == undefined) {
    N1 = ''; N2 = '';
  }
  return [O,N1,N2,S1,S2];
}
function mainGame() {
  var A, C, O, H, T, P1, P2, N1, N2, S1, S2, V;
  C = ['✞','✰','◆','△','☂','★','☃','☢','☭','♘','♟','❖','❤','✄','☎','☠','✈','❡','☀','☁','✪','◎','✔','☯','Ω','♛','✿','✎','▼','♔'];
  V = 0;
  A = miniMenu(N1,N2,S1,S2);
  O = A[0]; N1 = A[1]; N2 = A[2]; S1 = A[3]; S2 = A[4];
  H = buildTab(O);
  T = buildTab(O);
  fillTab(H,C);
  do {
    P1 = pickPiece(T,O,N1,N2,S1,S2,V);
    P1 = showPiece(T,H,P1);
    P2 = pickPiece(T,O,N1,N2,S1,S2,V);
    P2 = showPiece(T,H,P2);
    verifyPieces(T,P1,P2,O);
    if (M == 3) {
      alert(showTab(T,O) + '\nVez do PC. Pontos do PC: ' + S2);
      P1 = botPickPi(T,O);
      P1 = showPiece(T,H,P1);
      P2 = botPickPi(T,O);
      P2 = showPiece(T,H,P2);
      verifyPieces(T,P1,P2,O);
    }
    V++;
  } while (verifyWin(T) == false);
  if (M == 1) {
    alert(showTab(T,O) + '\nParabéns, você venceu o jogo!!');
  } else if (M == 2) {
    if (S1 > S2) {
      alert(showTab(T,O) + '\n' + N1 + ' venceu o jogo com ' + S1 + 'x' + S2 + ' pontos cotnra ' + N2);
    } else {
      alert(showTab(T,O) + '\n' + N2 + ' venceu o jogo com ' + S2 + 'x' + S1 + ' pontos contra ' + N1);
    }
  } else {
    if (S1 > S2) {
      alert(showTab(T,O) + '\nVocê venceu o jogo com ' + S1 + 'x' + S2 + ' pontos contra PC');
    } else {
      alert(showTab(T,O) + '\nPC venceu o jogo com ' + S2 + 'x' + S1 + ' pontos contra você');
    }
  }
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
  alert('Use de coordenandas para selecionar a figura a revelar!');
  do {
    M = parseInt(prompt('Selecione o modo de jogo \n1 - Singleplayer \n2 - Multiplayer \n3 - Versus PC \n*Nas opções 2 e 3, haverá um único modo de dificuldade com 21 pares.'));
  } while ([1,2,3].indexOf(M) == -1);
  do {
    mainGame();
  } while (G == 'S');
} while (G == 'N');

/*********************************
 * Pedro Garcia Machado - 11030373
 * Lógica de Progra. - 4o Bimestre
 * Profa Raquel de Miranda Barbosa
*********************************/

//TRABALHO DE CONCLUSÃO DE ANO: "Jogo da Memória"
function buildTab(opt) {
  var tab;
  tab = [['❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏']];
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
function showTab(tab) {
  var aux = [];
  for (var I = 0; I < tab.length; I++) {
    aux[I] = tab[I].join(' ');
  }
  return aux.join('\n');
}
//function revealTab()
//function verifyWin()
function pickPiece(tab,opt) {
  var P1, P2, LI, CO, PE;
  LI = ['A','B','C','D','E'];
  CO = ['1','2','3','4','5','6'];
  LI.length = 2 + opt;
  CO.length = 3 + opt;
  PE = [];
  for (var I = 0; I < LI.length; I++) {
    for (var J = 0; J < CO.length; J++) {
      PE.push(LI[I] + CO[J]);
      PE.push(CO[J] + LI[I]);
    }
  }
  do {
    do {
      P1 = prompt('Escolha uma posição:').trim().toUpperCase();
    } while (PE.indexOf(P1) == -1);
    if (!isNaN(parseInt(P1)) == true) {
      P1 = P1[1] + parseInt(P1);
    }
    var X = LI.indexOf(P1[0]);
    var Y = CO.indexOf(P1[1]);
  } while (tab[X][Y] != '❏');
  do {
    do {
      P2 = prompt('Escolha uma posição:').trim().toUpperCase();
    } while (PE.indexOf(P2) == -1);
    if (!isNaN(parseInt(P2)) == true) {
      P2 = P2[1] + parseInt(P2);
    }
    var X = LI.indexOf(P2[0]);
    var Y = CO.indexOf(P2[1]);
  } while (tab[X][Y] != '❏');
}
function mainMenu() {
  do {
    var men = prompt('Bem vindo ao Jogo da Memória!!\n' + ('-').repeat(20) + '\nENTER - Jogar \nR - Regras \nC - Créditos \nS - Sair').trim().toUpperCase();
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
//JOGO DA MEMÓRIA
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
  var G = mainGame();
  //retornar ao menu ou rejogar selecioanndo a difucldade
} while (G == 'N');


function mainGame() {
  var C, O, T, H, P;
  C = ['✞','✰','◆','△','☂','★','☃','☢','☭','♘','♟','❖','❤','✄','☎','☠','✈','❡','☀','☁','✪','◎','✔','☯','Ω','♛','✿','✎','▼','♔'];
  do {
    O = parseInt(prompt('Selecione a dificuldade: \n1 - FÁCIL (6 pares) \n2 - MÉDIO (10 pares) \n3 - DIFÍCIL (15 pares)'));
  } while ([1,2,3].indexOf(O) == -1);
  T = buildTab(O);
  H = buildTab(O);
  fillTab(T,O);
  P = 
}
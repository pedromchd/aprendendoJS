/*********************************
 * Pedro Garcia Machado - 11030373
 * Lógica de Progra. - 4o Bimestre
 * Profa Raquel de Miranda Barbosa
*********************************/

//TRABALHO DE CONCLUSÃO DE ANO: "Jogo da Memória"
function buildTab() {
  var tab, opt;
  tab = [['❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏'],['❏','❏','❏','❏','❏','❏']];
  do {
    opt = parseInt(prompt('Selecione a dificuldade: \n1 - FÁCIL (6 pares) \n2 - MÉDIO (10 pares) \n3 - DIFÍCIL (15 pares)'));
  } while ([1,2,3].indexOf(opt) == -1);
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
//function revealTab();
var C, T;
C = ['✞','✰','◆','△','☂','★','☃','☢','☭','♘','♟','❖','❤','✄','☎','☠','✈','❡','☀','☁','✪','◎','✔','☯','Ω','♛','✿','✎','▼','♔'];
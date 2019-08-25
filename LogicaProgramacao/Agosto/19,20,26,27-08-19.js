/***********************
Pedro Machado - 11030373
Logica de Program 3o Bim
Profa. Raquel M. Barbosa
***********************/

var DF, NL, P4, P5, P6, P7, SO, HA, PS, TA, TE, PE, LE, CE, CH, OC, FI, LI, VD, TR, UP, PC, LC, DC, TV, PI, ES, SU, LO, UT, AL;
do {
  do {
    DF = prompt('DESCUBRA A PALAVRA... \nENTER - Jogar \nR - Regras \nC - Créditos \nESC - Sair do jogo');
    if (DF == null) {
      break;
    }
    if (DF.toUpperCase() == 'R') {
      alert('REGRAS: \nNo jogo Descubra a Palavra, você escolhe a quantidade de letras com que deseja jogar e a quantidade de tentativas relativa à dificuldade. \nDepois, deve adivinhar a palavra sorteada pelo computador, seguindo as orientações dadas.');
    } else if (DF.toUpperCase() == 'C') {
      alert('DESCUBRA A PALAVRA... \nDesenvolvido por Pedro Garcia Machado \nVersão 1.0 de agosto de 2019');
    }
  } while (DF != '');
  if (DF == null) {
    do {
      DF = prompt('Deseja sair do jogo? S/N').toUpperCase();
    } while (DF != 'S' && DF != 'N');
  }
  if (DF == 'S') {
    break;
  } else if (DF == 'N') {
    DF = 'S';
    continue;
  }
  do {
    NL = parseInt(prompt('Escolha o número de letras com que deseja jogar: 4, 5, 6 ou 7 letras.'));
  } while (NL != 4 && NL != 5 && NL != 6 && NL != 7);
  do {
    DF = parseInt(prompt('DIFICULDADE: \n1 - Fácil (15 tentativas) \n2 - Médio (10 tentativas) \n3 - Difícil (8 tentativas)'));
  } while (DF != 1 && DF != 2 && DF != 3);
  switch (DF) {
    case 1:
    DF = 15;
    break;
    case 2:
    DF = 10;
    break;
    case 3:
    DF = 8;
  }
  alert('LETRAS COM ACENTO E C-CEDILHA NÃO SÃO PERMITIDAS \n\nA cada 5 jogadas o jogo mostra uma letra');
  P4 = ' agua alvo arco auge aula bala bola bolo bota bote caos casa cedo cena cola dado dica dona dote duna eixo egua elmo erro erva faca fato flor frio fuga gado gato gelo grau gula halo hexa hino hoje humo iate iglu ilha irma item jaca jazz jogo joia juri lago laje leve lobo luxo mana meta mito mole mofo nata neto nojo nome nove ogro oleo olho onda ouro pata pato pena peru povo';
  P5 = ' acaso afeto ajuda anexo apice barco beijo bicho bolsa burro carne casal cisne coisa crise deixa diabo dogma doido ducto esqui etica etnia exito extra feliz forca fruta fusao fuzil germe gemeo golpe grama grupo hiato honra homem hotel humor icone ideia idoso ileso irmao jaula janta jarra jovem justo leite lenda limbo livro louca magia massa molho morro motim nariz navio nivel norma nuvem oasis ontem opala opera orgao plebe poder posto prato prova';
  P6 = ' acesso amanha anciao apatia apogeu bairro baleia baliza beleza bosque cessao cheiro cliche coiote contra dadiva decada destro devoto digito enfase enigma enxame escopo espaco faccao folego fossil fresta frouxa galera gloria goiaba grande guilda habito hafnio haicai halito helice ilusao imagem insumo intimo isento janela jacare jazida jiboia jubilo lacaio laguna leitor legado lingua macula margem metodo motivo motriz namoro nativo nectar novela nucleo objeto oferta onibus orbita origem paixao plebeu pressa prisma proeza';
  P7 = ' alegria amizade anedota aspecto atitude bagunca beldade boicote bolacha bussola capital chacota clerigo colapso conjuge deboche desafio deserto despota docente embuste emotivo empatia escoria exotico falange familia fissura fomento forjado galeria genioso gingado governo guarita heranca heresia higiene hortela hospede iguaria inercia impacto intuito inimigo jaguara jangada japones jornada jugular lamento lampejo latrina lavoura luxuria maquina medonho monstro morbido mosaico natural ninguem nobreza noticia notorio obliquo oficina orelhao ousadia ouvinte patente peralta planeta precoce projeto';
  switch (NL) {
    case 4:
    PI = P4;
    break;
    case 5:
    PI = P5;
    break;
    case 6:
    PI = P6;
    break;
    case 7:
    PI = P7;
  }
  for (ES = 0; PI.indexOf(' ') != -1; ES++) {
    PI = PI.replace(' ','-');
  }
  SO = Math.ceil(Math.random()*ES);
  for (HA = -(1 + NL); SO > 0; SO--) {
    HA += (1 + NL);
  }
  PS = PI.substr(++HA,NL);
  console.log(PS);
  for (TV = '', PC = 0; PC < NL; PC++) {
    TV += PS[PC].toUpperCase() + ' ';
  }
  for (VD = false, TR = '_ '.repeat(NL), UP = PS, TA = '', TE = 1, LO = 2, AL = '', UT = 3; TE <= DF; TE++) {
    SU = '';
    if ((DF - TE) < 3) {
      AL = '\n**********' + UT + ' TENTATIVA(S) RESTANTE(S)!!**********';
      UT--;
    }
    do {
      PE = prompt(TR + SU + '\nChute uma palavra de ' + NL + ' letras: digite S para sugestão.' + AL + TA).toLowerCase();
      if (PE == 's') {
        do {
          SO = Math.ceil(Math.random()*ES);
          for (HA = -(1 + NL); SO > 0; SO--) {
            HA += (1 + NL);
          }
          SU = ' Sugestão: ' + PI.substr(++HA,NL);
        } while (SU.substring(SU.lastIndexOf(' ')+1) == PS);
      }
    } while (PE.length != NL);
    if (PE == PS) {
      VD = true;
    }
    for (LE = 0, CE = 0, CH = 0; CH < NL; CH++) {
      OC = PS.indexOf(PE.toLowerCase().charAt(CH));
      FI = PE.indexOf(PS[CH]);
      LI = PE.lastIndexOf(PS[CH]);
      if (OC == -1) {
        CE++;
      }
      if (FI == -1 && LI == -1) {
        LE++;
      } else if (LI == CH) {
        PE = PE.slice(0,CH) + PE.slice(CH).replace(PE[CH],PE[CH].toUpperCase());
        UP = UP.slice(0,CH) + UP.slice(CH).replace(UP[CH],UP[CH].toUpperCase());
      } else if (FI == CH) {
        PE = PE.replace(PE[CH],PE[CH].toUpperCase());
        UP = UP.replace(UP[CH],UP[CH].toUpperCase());
      }
    }
    (CE > LE) ? LE = CE: LE = LE; 
    TA += '\n' + TE + ') ' + PE + ' - ' + LE + ' letra(s) errada(s)';
    if (TE > 5) {
      console.log(TA.slice(1,TA.indexOf(LO)-1));
      TA = '\n' + TA.slice(TA.indexOf(LO + ')'));
      LO++;
    } 
    if ((TE+1)%5 == 0) {
      DC = Math.floor(Math.random()*LC.length);
      UP = UP.replace(LC[DC],LC[DC].toUpperCase());
      TA += '\nDICA: A palavra possui a letra ' + LC[DC].toUpperCase();
    }
    for (LC = '', TR = '', PC = 0; PC < NL; PC++) {
      if (UP.charCodeAt(PC) >= 65 && UP.charCodeAt(PC) <= 90) {
        TR += UP[PC] + ' ';
      } else {
        TR += '_ ';
        LC += UP[PC];
      }
    }
    if (TV == TR && VD != true) {
      TR = 'A palavra é ' + TV.replace(/ /g,'');
    }
    if (VD == true) {
      alert(TA.slice(TA.indexOf(')')-1).replace(PE.toUpperCase() + ' - 0 letra(s) errada(s)',TR) + '\nPARABÉNS, você descobriu a palavra!!');
      console.log(TA.slice(TA.indexOf('\n')+1));
      break;
    }
  }
  if (VD == false || TE > DF) {
    alert('VOCÊ PERDEU! A palavra correta era: ' + PS.toUpperCase());
    console.log(TA.slice(TA.indexOf('\n')+1));
  }
  do {
    DF = prompt('Deseja jogar novamente? S/N').toUpperCase();
  } while (DF != 'S' && DF != 'N');
} while (DF != 'N');
alert('DESCUBRA A PALAVRA... \nDesenvolvido por Pedro Garcia Machado \nVersão 1.0 de agosto de 2019 \nMUITO OBRIGADO POR JOGAR!!');

/*
GLOSSÁRIO DE VARIÁVEIS
DF - Dificuldade
NL - Número de letras
P4 - Palavras de 4 letras
P5 - Palavras de 5 letras
P6 - Palavras de 6 letras
P7 - Palavras de 7 letras
SO - Sorteador
HA - Hífen at
PS - Palavra sorteada
TA - Tentativa anterior
TE - Tentativa
PE - Palavra escolhida
LE - Letras erradas
CE - Caracteres errados
CH - Character At
OC - Ocorrências do caracter
FI - First index of
LI - Last index of
VD - Vitória ou derrota
TR - Tracejado
UP - Upper case
PC - Percorredor de caracter
LC - Lower case
DC - Dica
TV - Tracejado verificador
PI - Palavra isolada
ES - Espaços
SU - Sugestão
LO - Log
UT - Últimas tentativas
AL - Alerta de tentativas
*/

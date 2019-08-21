//MELHORAR O ALERT
//APRIMORAR O MENU COM JOGAR E REGRAS
//ADICONAR MAIS PALAVRAS
//RESOLVER O ERRO ENTRE INDEXS
//APRIMORAR O CORE
//COMENTAR AS FUNÇÕES DE CADA LINHA PARA A APRESENTAÇÃO
//ADICIONAR A DICA
//ADICIONAR O DIFERENCIAL
//ADICONAR A VITORIA PERCA E CREDITOS

var DF, NL, P4, P5, P6, P7, SO, HA, PS, TA, TE, PE, LE, CE, CH, OC, FI, LI;
alert('Bem vindo ao jogo DESCUBRA A PALAVRA, nele, você escolhe a dificuldade de fácil à difícil, e depois o tamanho das palavras com que deseja jogar. \nVocê deve inserir palavras do mesmo número de letras até descobrir a palavra escondida ou esgotar suas tentativas. \nA cada palavra inserida, o jogo mostra em qual tentativa você está, a palavra que você escolheu e um número representando a quantidade de letras ERRADAS na palavra. \nSe houver uma letra certa na posição certa, esta será destacada em MAÍUSCULA. \nPalavras com acento e c-cedilha não são aceitas.');
do {
  do {
    DF = parseInt(prompt('DESCUBRA A PALAVRA... \nEscolha a dificuldade: \n1 - FÁCIL (15 TENTATIVAS) \n2 - MÉDIO (10 TENTATIVAS) \n3 - DIFÍCIL (8 TENTATIVAS) \nENTER - SAIR DO JOGO'));
    if (isNaN(DF)) {
      DF = '';
    }
  } while (DF != 1 && DF != 2 && DF != 3 && DF != '');
  switch (DF) {
    case 1:
    DF = 15;
    break;
    case 2:
    DF = 10;
    break;
    case 3:
    DF = 8;
    break;
    default:
    do {
      DF = prompt('DESEJA SAIR DO JOGO? S/N').toUpperCase();
    } while (DF != 'S' && DF != 'N');
  }
  if (DF == 'S') {
    DF = 0;
    break;
  } else {
    continue;
  }
} while (DF != 15 && DF != 10 && DF != 8);
if (DF != 0) {
  do {
    NL = parseInt(prompt('Escolha o número de letras com que deseja jogar: 4, 5, 6 ou 7 letras.'));
  } while (NL != 4 && NL != 5 && NL != 6 && NL != 7);
}
P4 = '-agua-arco-bala-bote-casa-cola-dado-dote-eixo-erro-faca-frio-gado-grau-halo-hoje-ilha-item-jaca-jogo-lago-lobo-mole-mofo-neto-nove-oleo-olho-pato-peru';
P5 = '-ajuda-anexo-barco-beijo-carne-cisne-diabo-doido-esqui-etnia-forca-fruta-golpe-grama-honra-hotel-icone-ideia-jaula-jovem-leite-limbo-magia-motim-navio-nivel-ontem-opera-poder-prato';
P6 = '-amanha-anciao-banana-batata-cheiro-contra-destro-digito-escopo-enxame-fossil-fresta-gloria-grande-habito-hafnio-imagem-insumo-jacare-jiboia-laguna-leitor-macula-motriz-nectar-nucleo-objeto-origem-plebeu-prisma';
P7 = '-alegria-atitude-bolacha-bussola-capital-chacota-deboche-deserto-empatia-exotico-familia-fissura-gingado-governo-heresia-hortela-iconico-iguaria-jangada-jornada-lampejo-luxuria-maquina-mosaico-natural-nobreza-obliquo-ousadia-planeta-precoce';
SO = Math.ceil(Math.random()*30);
for (HA = -(++NL); SO > 0; SO--) {
  HA += NL;
}
NL--;
switch (NL) {
  case 4:
  PS = P4.substr(++HA,NL);
  break;
  case 5:
  PS = P5.substr(++HA,NL);
  break;
  case 6:
  PS = P6.substr(++HA,NL);
  break;
  case 7:
  PS = P7.substr(++HA,NL);
}
console.log(PS);
for (TA = '', TE = 1; TE <= DF; TE++) {
  do {
    PE = prompt('Chute uma palavra de ' + NL + ' letras: \n' + TA).toLowerCase();
  } while (PE.length != NL);
  for (LE = 0, CE = 0, CH = 0; CH < NL; CH++) {
    OC = PS.indexOf(PE.toLowerCase().charAt(CH));
    FI = PE.indexOf(PS[CH]);
    LI = PE.lastIndexOf(PS[CH]);
    if (OC == -1) {
      CE++;
    }
    if (FI == -1 && LI == -1) {
      LE++;
    } else if (FI == CH) {
      PE = PE.replace(PE[CH],PE[CH].toUpperCase());
    } else if (LI == CH) {
      PE = PE.slice(0,CH) + PE.slice(CH).replace(PE[CH],PE[CH].toUpperCase());
    }
  }
  (CE > LE) ? LE = CE: LE = LE;
  TA += TE + ') ' + PE + ' - ' + LE + ' letra(s) errada(s) \n';
}

/*
DF - Dificuldade
NL - Número de letras
P4 - Palavras de 4 letras
P5 - Palavras de 5 letras
P6 - Palavras de 6 letras
P7 - Palavras de 7 letras
SO - Sorteador
HA - Hífem at
PS - Palavra sorteada
TA - Tentativa anterior
TE - Tentativa
PE - Palavra escolhida
LE - Letras erradas
CE - Characteres errados
CH - Character At
OC - Ocorrências do character
FI - First index of
LI - Last index of
*/
/*_ _ _ _
1. bola 2 letras erradas
2. kAua 3 letras erradas
3. gATO 1 letra errada
4. PATO

Pedir para a pessoa escolher uma palvaras com 4,5,6 ou mais letras

EScolha dificuldade fácil (15 tentativas), médio (10 tentativas) e difícil (8 tentivas)

Dica a partir da 5 tentativa

Sorteia as palavras (pelo menos 90)

Número da tentativa o que a pessoa escreveu e quantas Letras erradas que não tem 

2.0 pontos + diferencial (extra)

Entrega terça que vem
*/

//DESCUBRA A PALAVRA

var TP, P4, P5, P6, P7, CO, NP, PA, PE, TR, TE, CH, PO, LE
TP = parseInt(prompt('Tamanho da palavra:'));
P4 = '-amor-arco-bala-bote-casa-cola';
P5 = '-ajuda-anexo-barco-beijo-carne-cisne';
P6 = '-acento-anciao-banana-batata-cheiro-contra';
P7 = '-alegria-atitude-bolacha-bussola-capital-chacota' //ADICIONAR MAIS 24 PALAVRAS
CO = Math.ceil(Math.random()*6); //ATENÇÃO MUDAR PARA 30
for (NP = - ++TP; CO > 0; CO--) {
  NP += TP;
}
TP--;
if (TP == 4) {
  PA = P4.substr(++NP,TP);
} else if (TP == 5) {
  PA = P5.substr(++NP,TP);
} else if (TP == 6) {
  PA = P6.substr(++NP,TP);
} else if (TP == 7) {
  PA = P7.substr(++NP,TP);
}
console.log(PA);
TR = '_ '.repeat(TP);
console.log(TR);
do {
  do {
    TE = parseInt(prompt('Escolha a dificuldade: \n1 - FÁCIL (15 TENTATIVAS) \n2 - MÉDIO (10 TENTATIVAS) \n3 - DIFÍCIL (8 TENTATIVAS) \nENTER - SAIR DO JOGO'));
    if (isNaN(TE)) {
      TE = '';
    }
  } while (TE != 1 && TE != 2 && TE != 3 && TE != '');
  switch (TE) {
    case 1: TE = 15; break;
    case 2: TE = 10; break;
    case 3: TE = 8; break;
    default: 
      TE = prompt('DESEJA SAIR DE "DESCUBRA A PALAVRA"? S/N').toUpperCase();
  }
  if (TE == 'S') {
    break;
  } else {
    continue;
  }
} while (TE != 15 && TE != 10 && TE != 8);
while (TE > 0) {
  do {
    PE = prompt('Escolha uma palavra:').toLowerCase();
  } while (PE.length != TP);
  for (CH = 0, LE = 0; CH < TP; CH++) {
    PO = PE.indexOf(PA[CH]);
    if (PO == -1) {
      LE++;
    } else {
      if (PO == CH-1) {
        PE.replace(PE[PO],PE[PO].toUpperCase());
      }
    }
  }
  TE--;
}
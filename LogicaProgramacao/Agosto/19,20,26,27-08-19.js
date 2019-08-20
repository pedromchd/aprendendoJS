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

/*
TP - TAMANHO DA PALAVRA
P4 P5 P6 P7 - PALAVRAS COM 4,5,6 OU 7 LETRAS
SO - SORTEIA O HÍFEM
PH - POSIÇÃO DO HÍFEM
PS - PALAVRA SORTEADA
PE - PALAVRA ESCOLHIDA
TT - TRACEJADO TEMPORÁRIO
NT - NÚMERO DE TENTATIVAS
TE - TENTATIVA
CH - CARACTÉR DA PALAVRA
OC - OCORRÊNCIAS DA LETRA
LE - LETRAS ERRADAS
TR - TRACEJADO
TA - TENTATIVA ANTERIOR
  LC - LETRAS CERTAS
  PO - POSIÇÃO DA OCORRÊNCIA
  OS - OCORRÊNCIAS NA SORTEADA
  OE - OCORRÊNCIAS NA ESCOLHIDA
  CO - CONTADOR
*/
var TP, P4, P5, P6, P7, SO, PH, PS, PE, TT, NT, TE, CH, OC, LE, TA, TR,   LC, PO, OS, OE, CO
//alert('Bem vindo ao jogo "DESCUBRA A PALAVRA", este é um jogo de lógica que consiste 
do { //Menu
  do {
    NT = parseInt(prompt('DESCUBRA A PALAVRA... \nEscolha a dificuldade: \n1 - FÁCIL (15 TENTATIVAS) \n2 - MÉDIO (10 TENTATIVAS) \n3 - DIFÍCIL (8 TENTATIVAS) \nENTER - SAIR DO JOGO')); //Dificuldade
    if (isNaN(NT)) { //Se for ENTER
      NT = '';
    }
  } while (NT != 1 && NT != 2 && NT != 3 && NT != ''); //Repete enquanto a opção certa não for escolhida
  switch (NT) { //Define as tentativas de acordo com a opção
    case 1: NT = 15; break;
    case 2: NT = 10; break;
    case 3: NT = 8; break;
    default: //Define o comando de saída do jogo
      NT = prompt('DESEJA SAIR DE "DESCUBRA A PALAVRA"? S/N').toUpperCase();
  }
  if (NT == 'S') { //Sai do jogo
    NT = 0; break;
  } else { //Repete o menu
    continue;
  }
} while (NT != 15 && NT != 10 && NT != 8); //Repete enquanto uma das opções não for selecionada

//SORTEADOR ****************
if (NT != 0) {
  do {
    TP = parseInt(prompt('Tamanho da palavra:')); //Pede o length da palavra
  } while (TP != 4 && TP != 5 && TP != 6 && TP != 7);
}
P4 = '-amor-arco-bala-bote-casa-cola';
P5 = '-ajuda-anexo-barco-beijo-carne-cisne';
P6 = '-acento-anciao-banana-batata-cheiro-contra';
P7 = '-alegria-atitude-bolacha-bussola-capital-chacota' //ADICIONAR MAIS 24 PALAVRAS
SO = Math.ceil(Math.random()*6); //Sorteia qual hífem pegar //ATENÇÃO MUDAR PARA 30
for (PH = - ++TP; SO > 0; SO--) { //Acha a posição do hífem sorteado
  PH += TP;
}
TP--;

//Corta a palavra com relação ao tamanho
if (TP == 4) {
  PS = P4.substr(++PH,TP);
} else if (TP == 5) {
  PS = P5.substr(++PH,TP);
} else if (TP == 6) {
  PS = P6.substr(++PH,TP);
} else if (TP == 7) {
  PS = P7.substr(++PH,TP);
}
console.log(PS);
TT = '_ '.repeat(TP); //Define o tracejado temporário
console.log(TT);
//JOGO ******************
for (TA = '', TE = 1; TE <= NT; TE++) { //JOGO DEFINITIVO
  do {
    PE = prompt('Escolha uma palavra:\n' + TA).toLowerCase(); //Pede a letra e deixa minúscula
  } while (PE.length != TP); //Enquanto o tamanho dela não for do tamanho escolhido
  for (LE = 0, CH = 0; CH < TP; CH++) { //Verificador das letras da palavra
    OC = PE.indexOf(PS[CH]);
    if (OC == -1) {
      LE++;
    } else {
      if (OC == CH) {
        PE = PE.replace(PS[CH],PE[OC].toUpperCase());
      }
    }
  }
  TA += TE + ') ' + PE + ' ' + LE + '\n';
}


for (TR = '', CH = 0; CH < TP; CH++) {
	if (CH == OC) {
		TR += PS[CH].toUpperCase()+' ';
  } else {
		TR += '_ ';
  }
}

/*
 o
/|\
 |\
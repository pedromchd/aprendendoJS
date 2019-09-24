/**************************
 * PEDRO MACHADO - 11030373
 * LOGICA PROGRAM. - 3o BIM
 * PROFa. RAQUEL M. BARBOSA
**************************/

/*
FUNCIONALIDADES:
- Reembaralhar;
- Mudar palavra;
- Letras corretas na posição
  correta são mostradas.
*/

//SCRAMBLE
var ME, BP, SO, PS, LE, CO, PE, TE, PI, TA, VL, PO, TP;
do {
  do {
    ME = prompt('Bem-vindo ao SCRAMBLE! \nNavegue através dos botões abaixo: \n* ENTER - Jogar \n* R - Regras \n* ESC - Sair');
    if (ME == null) {
      break;
    } else if (ME.toUpperCase() == 'R') {
      alert('SCRAMBLE! - Regras \nUma palavra de 4 à 7 letras é sorteada e embaralhada pelo PC. \nVocê deve, através de 15 tentativas, adivinhá-la. \nPode-se reembaralhar ou mudar a palavra quantas vezes quiser.');
    }
  } while (ME != '');
  if (ME == null) {
    do {
      ME = prompt('Tem certeza em sair de SCRAMBLE! [S/N]?').toUpperCase();
    } while (ME != 'S' && ME != 'N');
    (ME == 'S') ? ME = null : ME = undefined;
    continue;
  }
  BP = ['AGUA', 'ALVO', 'ARCO', 'AUGE', 'AULA', 'BALA', 'BOLA', 'BOLO', 'BOTA', 'BOTE', 'CAOS', 'CASA', 'CEDO', 'CENA', 'COLA', 'DADO', 'DICA', 'DONA', 'DOTE', 'DUNA', 'EIXO', 'EGUA', 'ELMO', 'ERRO', 'ERVA', 'FELIZ', 'FORCA', 'FRUTA', 'FUSAO', 'FUZIL', 'GERME', 'GEMEO', 'GOLPE', 'GRAMA', 'GRUPO', 'HIATO', 'HONRA', 'HOMEM', 'HOTEL', 'HUMOR', 'ICONE', 'IDEIA', 'IDOSO', 'ILESO', 'IRMAO', 'JAULA', 'JANTA', 'JARRA', 'JOVEM', 'JUSTO', 'LACAIO', 'LAGUNA', 'LEITOR', 'LEGADO', 'LINGUA', 'MACULA', 'MARGEM', 'METODO', 'MOTIVO', 'MOTRIZ', 'NAMORO', 'NATIVO', 'NECTAR', 'NOVELA', 'NUCLEO', 'OBJETO', 'OFERTA', 'ONIBUS', 'ORBITA', 'ORIGEM', 'PAIXAO', 'PLEBEU', 'PRESSA', 'PRISMA', 'PROEZA', 'QUIMERA', 'QUIMICA', 'QUINDIM', 'QUINTAL', 'QUITADO', 'REFUTAR', 'REGALIA', 'REMESSA', 'RENOVAR', 'ROBUSTO', 'SAUDADE', 'SENSATO', 'SISTEMA', 'SORDIDO', 'SUCINTO', 'TALENTO', 'TERMINO', 'TOALETE', 'TRAFEGO', 'TRIUNFO', 'ULTRAJE', 'UMBRELA', 'UMIDADE', 'UNANIME', 'UNIVOCO'];
  SO = Math.floor(Math.random() * BP.length);
  PS = BP[SO];
  for (CO = 0, PO = []; CO < PS.length; CO++) {
    PO[CO] = '_';
  }
  do {
    for (CO = 0, LE = '', PE = ''; CO < PS.length; CO++) {
      do {
        SO = Math.floor(Math.random() * PS.length);
      } while (LE.indexOf(SO) != -1);
      LE += SO;
      PE += PS[SO] + ' ';
    }
    console.log(PS, PE.replace(/ /g,''));
  } while (PE.replace(/ /g,'') == PS);
  alert('Insira somente LETRAS. Acentos e Ç são marcados como ERRADOS durante a análise.');
  for (TE = 15, TA = ''; TE > 0; TE--) {
    do {
      do {
        PI = prompt(PE + ' (' + PS.length + ' letras)'  + '\n' + PO + '\nInsira R para reembaralhar ou M para mudar a palavra.\n' + TE + ') Tente adivinhar a palavra:' + TA).toUpperCase().trim();
      } while (PI.length != PS.length && PI != 'R' && PI != 'M');
      for (CO = 0, VL = ''; CO < PI.length; CO++) {
        if (PI[CO] >= 'A' && PI[CO] <= 'Z') {
          VL += PI[CO];
        }
      }
      switch (PI) {
        case 'M':
        SO = Math.floor(Math.random() * BP.length);
        PS = BP[SO];
        for (CO = 0, PO = []; CO < PS.length; CO++) {
          PO[CO] = '_';
        }
        case 'R':
        do {
          for (CO = 0, LE = '', PE = ''; CO < PS.length; CO++) {
            do {
              SO = Math.floor(Math.random() * PS.length);
            } while (LE.indexOf(SO) != -1);
            LE += SO;
            PE += PS[SO] + ' ';
          }
          console.log(PS, PE.replace(/ /g,''));
        } while (PE.replace(/ /g,'') == PS);
        PI = undefined;
      }
    } while (PI != VL);
    if (PI == PS) {
      alert(PS + '\nPARABÉNS, VOCÊ VENCEU!');
      break;
    }
    for (CO = 0; CO < PS.length; CO++) {
      if (PI[CO] == PS[CO]) {
        PO[CO] = PI[CO];
      }
    }
    TA = '\n' + TE + ') ' + PI + TA;
  }
  if (PI != PS) {
    alert('Que pena, você perdeu! A palavra correta era ' + PS);
  }
  do {
    ME = prompt('Deseja jogar novamente? [S/N]').toUpperCase();
  } while (ME != 'S' && ME != 'N');
  (ME == 'N') ? ME = null : ME = undefined;
} while (ME !== null);

/****************************
 * ME - Menu
 * BP - Banco de palavras
 * SO - Sorteador
 * PS - Palavra sorteada
 * LE - Letra embaralhada
 * CO - Contador
 * PE - Palavra embaralhada
 * TE - Tentativas
 * PI - Palavra inserida
 * TA - Tentativa anterior
 * VL - Verificador de letras
 * PO - Palavra orientada
 * TP - Trocador de posições
****************************/ 
/***********************
Pedro Machado - 11030373
Logica de Program 3o Bim
Profa. Raquel M. Barbosa
***********************/

var DF, NL, P4, P5, P6, P7, SO, HA, PS, TA, TE, PE, LE, CE, CH, OC, FI, LI, VD, TR, UP, PC, LC, DC, TV, PI, ES, SU, LO, UT, AL; //Define 31 variáveis
do { //Começa o loop do jogo
  do { //MENU
    DF = prompt('DESCUBRA A PALAVRA... \nENTER - Jogar \nR - Regras \nC - Créditos \nESC - Sair do jogo');
    if (DF == null) { //Define o comando de saída do código
      break;
    }
    if (DF.toUpperCase() == 'R') { //Regras
      alert('REGRAS: \nNo jogo Descubra a Palavra, você escolhe a quantidade de letras com que deseja jogar e a quantidade de tentativas relativa à dificuldade. \nDepois, deve adivinhar a palavra sorteada pelo computador, seguindo as orientações dadas.');
    } else if (DF.toUpperCase() == 'C') { //Créditos
      alert('DESCUBRA A PALAVRA... \nDesenvolvido por Pedro Garcia Machado \nVersão 1.0 de agosto de 2019');
    }
  } while (DF != ''); //O jogador conitnua no loop enquanto não jogar ou sair do jogo
  if (DF == null) {
    do {
      DF = prompt('Deseja sair do jogo? S/N').toUpperCase(); //Confirma a saída do jogador
    } while (DF != 'S' && DF != 'N');
  }
  if (DF == 'S') {
    break; //Sai inteiramente do código
  } else if (DF == 'N') {
    DF = 'S'; //Não sai do código, mas define como 'S' a variável para que o loop do jogo recomece; "Deseja jogar novamente?"
    continue;
  }
  do { //Número de letras a se jogar
    NL = parseInt(prompt('Escolha o número de letras com que deseja jogar: 4, 5, 6 ou 7 letras.'));
  } while (NL != 4 && NL != 5 && NL != 6 && NL != 7);
  do { //Dificuldade
    DF = parseInt(prompt('DIFICULDADE: \n1 - Fácil (15 tentativas) \n2 - Médio (10 tentativas) \n3 - Difícil (8 tentativas)'));
  } while (DF != 1 && DF != 2 && DF != 3);
  switch (DF) { //Define o número de tentativas escolhido anteriormente
    case 1:
    DF = 15;
    break;
    case 2:
    DF = 10;
    break;
    case 3:
    DF = 8;
  }
  alert('LETRAS COM ACENTO E C-CEDILHA NÃO SÃO PERMITIDAS \n\nA cada 5 jogadas o jogo mostra uma letra'); //Aviso sobre a funcionalidade do código
  //PALAVRAS: Define as 300 palavras, 75 para cada opção escolhida pelo jogador
  P4 = ' agua alvo arco auge aula bala bola bolo bota bote caos casa cedo cena cola dado dica dona dote duna eixo egua elmo erro erva faca fato flor frio fuga gado gato gelo grau gula halo hexa hino hoje humo iate iglu ilha irma item jaca jazz jogo joia juri lago laje leve lobo luxo mana meta mito mole mofo nata neto nojo nome nove ogro oleo olho onda ouro pata pato pena peru povo';
  P5 = ' acaso afeto ajuda anexo apice barco beijo bicho bolsa burro carne casal cisne coisa crise deixa diabo dogma doido ducto esqui etica etnia exito extra feliz forca fruta fusao fuzil germe gemeo golpe grama grupo hiato honra homem hotel humor icone ideia idoso ileso irmao jaula janta jarra jovem justo leite lenda limbo livro louca magia massa molho morro motim nariz navio nivel norma nuvem oasis ontem opala opera orgao plebe poder posto prato prova';
  P6 = ' acesso amanha anciao apatia apogeu bairro baleia baliza beleza bosque cessao cheiro cliche coiote contra dadiva decada destro devoto digito enfase enigma enxame escopo espaco faccao folego fossil fresta frouxa galera gloria goiaba grande guilda habito hafnio haicai halito helice ilusao imagem insumo intimo isento janela jacare jazida jiboia jubilo lacaio laguna leitor legado lingua macula margem metodo motivo motriz namoro nativo nectar novela nucleo objeto oferta onibus orbita origem paixao plebeu pressa prisma proeza';
  P7 = ' alegria amizade anedota aspecto atitude bagunca beldade boicote bolacha bussola capital chacota clerigo colapso conjuge deboche desafio deserto despota docente embuste emotivo empatia escoria exotico falange familia fissura fomento forjado galeria genioso gingado governo guarita heranca heresia higiene hortela hospede iguaria inercia impacto intuito inimigo jaguara jangada japones jornada jugular lamento lampejo latrina lavoura luxuria maquina medonho monstro morbido mosaico natural ninguem nobreza noticia notorio obliquo oficina orelhao ousadia ouvinte patente peralta planeta precoce projeto';
  switch (NL) { //Isola uma das opções de número de letras em uma única variável
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
  for (ES = 0; PI.indexOf(' ') != -1; ES++) { //Conta o número de espaços existente dentro da variável, que condiz com o número de letras. Permite que cada variável tenha um número desigual de palavras
    PI = PI.replace(' ','-'); //Substitui os espaços por hífens, para uma melhor otimização do contador
  }
  SO = Math.ceil(Math.random()*ES); //Sorteia um número baseado no número de espaços, funcionaria para dizer qual espaço "pegar"
  for (HA = -(1 + NL); SO > 0; SO--) {
    HA += (1 + NL); //Defina a posição do espaço sorteado com relação ao múltiplo do intervalo entre as palavras de determinado número de letras
  }
  PS = PI.substr(++HA,NL); //Define a palavra sorteada, removendo uma única palavra de toda a variável
  //console.log(PS);
  for (TV = '', PC = 0; PC < NL; PC++) {
    TV += PS[PC].toUpperCase() + ' '; //Pega a palavra sorteada e transforma em um tracejado completo por "E X E M P L O "
  }
  //JOGO DEFINITIVO
  for (VD = false, TR = '_ '.repeat(NL), UP = PS, TA = '', TE = 1, LO = 2, AL = '', UT = 3; TE <= DF; TE++) { //Define diversas variáveis e o loop de tentativas, quebrado apenas quando esta se esgota ou quando o jogador vence
    SU = ''; //Define a variável sugestão, que é resetada a cada loop
    if ((DF - TE) < 3) { //Ao faltar 3 tentativas o jogador será avisado disso
      AL = '\n**********' + UT + ' TENTATIVA(S) RESTANTE(S)!!**********';
      UT--;
    }
    do { //PROMPT PARA A ADIVINHAÇÃO DA PALAVRA
      PE = prompt(TR + SU + '\nChute uma palavra de ' + NL + ' letras: digite S para sugestão.' + AL + TA).toLowerCase();
      if (PE == 's') { //Chama a variável sugestão
        do {
          SO = Math.ceil(Math.random()*ES); //Sorteia um novo espaço
          for (HA = -(1 + NL); SO > 0; SO--) {
            HA += (1 + NL); //Constrói a nova posição
          }
          SU = ' Sugestão: ' + PI.substr(++HA,NL); //Retorna a variável com a palavra sugerida
        } while (SU.substring(SU.lastIndexOf(' ')+1) == PS); //O loop impede que a palavra sugerida seja a mesma sorteada pelo jogo
      }
    } while (PE.length != NL); //Impede que uma palavra que não corresponda ao número de letras pedido tenha de mais ou de menos
    if (PE == PS) { //Se a palavra inserida for a mesma sorteada defina a variável como verdadeira, caracterizando a vitória em diante
      VD = true;
    }
    //CORE: O NÚCLEO DE TODO O CÓDIGO AO ESTILO AINCRAD
    for (LE = 0, CE = 0, CH = 0; CH < NL; CH++) { //Define as letras erradas e a análise de cada caracter das palavras
      OC = PS.indexOf(PE.toLowerCase().charAt(CH)); //Procura a ocorrência de letras: ESCOLHIDA -> SORTEADA
      FI = PE.indexOf(PS[CH]); //Procura as primeiras ocorrências de letras: SORTEADA -> ESCOLHIDA
      LI = PE.lastIndexOf(PS[CH]); //Procura as últimas ocorrências de letras: SORTEADA -> ESCOLHIDA
      if (OC == -1) { //Se não esxistirem ocorrências de ESCOLHIDA -> SORTEADA
        CE++; //Define os caracteres errados
      }
      if (FI == -1 && LI == -1) { //Se não ouverem ocorências de SORTEADA -> ESCOLHIDA
        LE++; //Define as letras erradas
      } else if (LI == CH) { //Se a última ocorrência SORTEADA -> ESCOLHDIA estiver na mesma posição em ambas palavras
        PE = PE.slice(0,CH) + PE.slice(CH).replace(PE[CH],PE[CH].toUpperCase()); //Separa a ESCOLHIDA até a última ocorrência e deixa ela em maiúscula antes de unir novamente
        UP = UP.slice(0,CH) + UP.slice(CH).replace(UP[CH],UP[CH].toUpperCase()); //Separa a SORTEADA em outra variável e repete o processo
      } else if (FI == CH) { //Caso somente a primeira ocorrência seja da mesma posição
        PE = PE.replace(PE[CH],PE[CH].toUpperCase()); //Deixa esta ocorrência em maiúscula na ESCOLHIDA
        UP = UP.replace(UP[CH],UP[CH].toUpperCase()); //Repete o processo na cópia da SORTEADA
      } //Caso a letra esteja presente, mas não esteja na posição certa, não será contada como errada, mas também não será posta em maiúscula
    } //FIM DO CORE E DECORRÊNCIA DO JOGO EM FUNÇÃO DOS RESULTADOS OBTIDOS
    TA += '\n' + TE + ') ' + PE + ' - ' + LE + ' letra(s) errada(s)'; //Cria um log das tentativas anteriores para interpretação do jogador
    if (TE > 5) { //A partir da 5a jogada o log irá apagar a primeira sua primeira a cada nova tentativa
      TA = '\n' + TA.slice(TA.indexOf(LO + ')')); //Corta o log a partir do número da próxima jogada, para cortar a tentativa 1 é preciso pegar a variável a partir de '2)'
      LO++; //Aumenta o cortador do log a cada corte
    } 
    if ((TE+1)%5 == 0) { //Se a tentativa seguinte representar a 5a tentativa
      DC = Math.floor(Math.random()*LC.length); //A variável dica sorteia um número
      UP = UP.replace(LC[DC],LC[DC].toUpperCase()); //A variável cópia de SORTEADA irá deixar em maiúscula uma das letras ainda não encontradas
      TA += '\nDICA: A palavra possui a letra ' + LC[DC].toUpperCase(); //Irá inserir a dica no código
    }
    (CE > LE) ? LE = CE: LE = LE; //Compara os caracteres errados (PE>PS) com as letras erradas (PS>PE), a com maior número vence, é um sistema mutualista que supre os defeitos de cada um
    for (LC = '', TR = '', PC = 0; PC < NL; PC++) { //Irá construir o tracejado que compõe as letras corretas na posição correta
      if (UP.charCodeAt(PC) >= 65 && UP.charCodeAt(PC) <= 90) { //Se a letra estiver maiúscula está será posta no tracejado
        TR += UP[PC] + ' ';
      } else { //Caso estjam minúsculas, o código as adiciona para um string para serem sorteadas pela dica, são atualizada a todo momento
        TR += '_ '; //O código susbtitui elas pelo traço
        LC += UP[PC];
      }
    } //DISCLAIMER: A função dica parece vir primeiro que a função autocompletar/tracejado, porém no loop esta função foi executada 4 vezes antes e faz com que a dica apareça ao mesmo tempo que a autocompletar
    if (TV == TR && VD != true) { //Se o autocompletar preencher todo o tracejado, como verificado pela varíável definida antes do jogo...
      TR = 'A palavra é ' + TV.replace(/ /g,''); //...será mostrada uma menseagem indicando ao jogador a palavra certa a inserir
    }
    if (VD == true) { //Quando a vitória do jogador for verdadeira...
      alert(TA.slice(TA.indexOf(')')-1).replace(PE.toUpperCase() + ' - 0 letra(s) errada(s)',TR) + '\nPARABÉNS, você descobriu a palavra!!'); //...destaca a palava e elimina erros de \n oriundos das outras funções
      break; //Quebra o código, pulando para os créditos
    }
  } //FIM DO "NÚCLEO EXTERNO" DO JOGO
  if (VD == false || TE > DF) { //Quando as tentativas se esgotarem e o loop quebrado, a vitória será falsa, caracterizando a derrota
    alert('VOCÊ PERDEU! A palavra correta era: ' + PS.toUpperCase()); //Mostra a derrota e a palavra correta
  }
  do {
    DF = prompt('Deseja jogar novamente? S/N').toUpperCase(); //Indaga o jogador para uma nova partida: "Deseja jogar novamente?"
  } while (DF != 'S' && DF != 'N');
} while (DF != 'N'); //Continua o código enquanto o jogador decidir que não deseja recomeçar
alert('DESCUBRA A PALAVRA... \nDesenvolvido por Pedro Garcia Machado \nVersão 1.0 de agosto de 2019 \nMUITO OBRIGADO POR JOGAR!!'); //Exibe os créditos *.*

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

var P, Pt, L, T, C, Le, Li, E, Tr;
P = prompt('Palavra:').toUpperCase(); //DEFINE A PALAVRA
E = 0; Le = ''; Li = ''; //DEFINE OS ERROS, LETRAS EXISTENTES E INEXISTENTES
Tr = '_ '.repeat(P.length); //CRIA O TRACEJADO INICIAL
for (Pt = '', C = 0; C < P.length; C++) { //SEPARA AS LETRAS DA PALAVRA
  if (P[C] == ' ') {
    Pt += '  '; 
  } else {
    Pt += P[C] + ' ';
  }
}
while (E < 6) { //EXECUTA O CÓDIGO ENQUANTO HOUVEREM TENTATIVAS DISPONÍVEIS
  do {
    L = prompt(Tr + '\nLetra:\n' + Li).toUpperCase(); //PEDE UMA LETRA
  } while (Le.indexOf(L) != -1 || Li.indexOf(L) != -1); //VERIFICA SE A LETRA JÁ NÃO FOI ESCOLHIDA
  for (T = '', C = 0; C < P.length; C++) { //DEFINE O TRACEJADO TEMPORÁRIO E VERIFICA AS LETRAS DA PALAVRA
    if (P.indexOf(L) != -1) { //VERIFICA A EXISTÊNCIA DA LETRA NA PALAVRA
      Le += L; //ADICIONA A LETRA ÀS EXISTENTES
      if (Le.indexOf(P[C]) != -1) { //VERIFICA SE AQUELA LETRA NA PALAVRA JÁ FOI ESCOLHIDA
        T += P[C] + ' '; //MANTÉM A LETRA NA PALAVRA
      } else if (P[C] != L) { //CASO A LETRA SEJA ESCOLHIDA PELA PRIMEIRA VEZ MAS NÃO ESTEJA NAQUELA POSIÇÃO
        if (P[C] == ' ') { //SE FOR UM ESPAÇO
          T += '  '; //SUBSTITUIR POR UM ESPAÇO MAIOR
        } else { //SE FOR LETRAS NÃO ESCOLHIDAS
          T += '_ '; //SUBSTITUIR PELO TRACEJADO
        }
      } else if (P[C] == L) { //CASO A LETRA SEJA ESCOLHIDA PELA PRIMEIRA VEZ E ESTEJA NAQUELA POSIÇÃO
        T += P[C] + ' '; //SUBSTITUIR A LETRA POR ELA MAIS O ESPAÇO
      }
      Tr = T; //ATRIBUIR O TRACEJADO TEMPORÁRIO AO DEFINITIVO
    } else { //CASO A LETRA NÃO EXISTA NA PALAVRA
      alert('A letra ' + L + ' não foi encontrada na palavra!');
      E++; //AUMENTA O ERRO
      Li += L + ' '; //ADICIONA A LETRA ÀS LETRAS INEXISTENTES
      break; //SAI DO CÓDIGO VERIFICADOR DE LETRAS DA PALAVRA
    }
  }
  console.log(T);
  if (T == Pt) { //SE A PALAVRA ESTIVER COMPLETAMENTE MONTADA
    alert(T + '\nParabéns, você ganhou!');
    break;
  } else if (E == 6) { //SE O NÚMERO DE ERROS CHEGAR AO LIMITE
    alert('Você perdeu! \nA palavra era ' + P);
  }
}

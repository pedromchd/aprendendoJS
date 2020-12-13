//JOGO DA SEQUÊNCIA
var N, S, J, P1, P2, I;
do {
  N = parseInt(prompt('Insira uma quantidade par de números a sequenciar:'));
} while (N%2 != 0);
for (S = [], I = 0; I < N; I++) {
  S.push(Math.round(Math.random() * N * 5));
}
do {
  for (P1 = 0, P2 = 0, I = 0; S.length != 0; I++) {
    if (I%2 == 0) {
      do {
        J = prompt(S.join(' - ') + '\nJOGADOR 1) \nVocê deseja remover o primeiro ou o último valor? [P]/[U] \nPontuação: ' + P1).trim().toUpperCase();
      } while (J != 'P' && J != 'U');
    } else {
      do {
        J = prompt(S.join(' - ') + '\nJOGADOR 2) \nVocê deseja remover o primeiro ou o último valor? [P]/[U] \nPontuação: ' + P2).trim().toUpperCase();
      } while (J != 'P' && J != 'U');
    }
    if (I%2 == 0) {
      (J == 'P') ? P1 += S.shift() : P1 += S.pop();
    } else {
      (J == 'P') ? P2 += S.shift() : P2 += S.pop();
    }
  }
  if (P1 > P2) {
    alert('JOGADOR 1 venceu com ' + P1 + ' pontos.');
  } else if (P2 > P1) {
    alert('JOGADOR 2 venceu com ' + P2 + ' pontos.');
  } else {
    alert('JOGADOR 1 e JOGADOR 2 empataram com ' + P1 + ' pontos.');
  }
  do {
    J = prompt('Desejam jogar novamente? [S]/[N]').trim().toUpperCase();
  } while (J != 'S' && J != 'N');
} while (J != 'N');

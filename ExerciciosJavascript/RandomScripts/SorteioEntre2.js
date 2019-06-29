var M, m, S;
m = parseInt(prompt('Insira o menor número do sorteio'));
M = parseInt(prompt('Insira o maior número do sorteio'));
S = Math.round(Math.random()*(M - m) + m);
console.log(S);

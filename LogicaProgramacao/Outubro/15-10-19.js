//LISTA DE FUNÇÕES

//1//
var N, S, A, V, P;
function validarNome(N) {
  return N.length > 1;
}
function obterSobrenome(N) {
  S = N.pop();
  return S;
}
function contarVogais(N) {
  var A = 'aeiou';
  N = N.shift();
  for (var I = 0, V = 0; I < N.length; I++) {
    if (A.indexOf(N[I]) != -1) {
      V++;
    }
  }
  return V;
}
do {
  N = prompt('Insira seu nome completo').trim().toLowerCase().split(' ');
  A = validarNome(N);
} while (A == false);
P = obterSobrenome(N) + 0 + contarVogais(N);
console.log(P);

//2//
var P, D, A;
function calcularDesconto(preco,desconto) {
  var V = P * (1 - D/100);
  return V.toFixed(2);
}
do {
  P = parseInt(prompt('Insira o preço da vacina:'));
} while (isNaN(P));
do {
  A = prompt('Você possui convênio? [S]/[N]').trim().toUpperCase();
} while (A != 'S' && A != 'N');
switch (A) {
  case 'S':
    do {
      A = parseInt(prompt('Qual convênio você possui? \n1 - Amigo dos Animais \n2 - Saúde Animal'))
    } while (A != 1 && A != 2);
    if (A == 1) {
      D = 20;
      console.log('Desconto de ' + D + '% para Amigo dos Animais, preço final de R$' + calcularDesconto(P,D));
    } else {
      D = 50;
      console.log('Desconto de ' + D + '% para Saúde Animal, preço final de R$' + calcularDesconto(P,D));
    }
    break;
  default:
    D = 10;
    console.log('Desconto de ' + D + '% para sem convênio, preço final de R$' + calcularDesconto(P,D));
}

//3//
var N, I;
function retornarTracos(nome) {
  var T = '-'.repeat(nome.length).split('');
  for (var J = 0; J < nome.length; J++) {
    if (nome[J] == ' ') T[J] = ' '; 
  }
  return T.join('');
}
function categorizarAluno(idade) {
  if (idade <= 12) {
    return 'Infantil';
  } else if (idade > 12 && idade <= 18) {
    return 'Juvenil';
  } else {
    return 'Adulto';
  }
}
N = prompt('Insira o nome do atleta:').trim().toUpperCase();
do {
  I = Math.abs(parseInt(prompt('Insira a idade do atleta:')));
} while (isNaN(I));
console.log(N + '\n' + retornarTracos(N) + '\nCategoria: ' + categorizarAluno(I));


//JOGO
//4//
var D, S;
function sofreDano(dano,saude) {
  return saude - dano <= 0;
}
do {
  D = parseInt(prompt('Insira o dano sofrido pelo personagem:'));
} while (isNaN(D));
do {
  S = parseInt(prompt('Insira a saúde pelo personagem:'));
} while (isNaN(S));
console.log(hit(D,S));

//5//
var I, J, A;
function temChave(itens) {
  var A = false
  for (var J = 0; J < itens.length; J++) {
    if (itens[J] == 'chave') {
      A = true;
      break;
    }
  }
  return A;
}
for (I = [], J = 0; J < 5; J++) {
  A = prompt('Insira os itens do herói a seguir:').trim().toLowerCase();
  I.push(A);
}
console.log(temChave(I));

//6//
var P;
function limitaPosicao(posicao) {
  if (posicao < 0 || posicao > 100) {
    posicao = Math.abs(posicao);
    while (posicao > 100) {
      posicao -= 100;
    }
  }
  return posicao
}
do {
  P = parseInt(prompt('Insira a posição do herói:'));
} while (isNaN(P));
console.log(limitaPosicao(P));

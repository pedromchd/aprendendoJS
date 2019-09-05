/***********************
Pedro Machado - 11030373
Logica de Program 3o Bim
Profa. Raquel M. Barbosa
***********************/

//1//
var S, C, P, I;
do {
  S = prompt('Insira uma plavara/frase, que o código dirá se é um palíndromo ou não: \nAcentos não são permitidos.').toUpperCase().trim();
} while (S == '');
for (C = 0, P = '', I = ''; C < S.length; C++) {
  if (S.charCodeAt(C) >= 65 && S.charCodeAt(C) <= 90) {
    P += S[C];
    I = S[C] + I;
  }
}
if (P == I) {
  alert(S + ' é um palíndromo!');
} else {
  alert(S + ' não é um palíndromo!');
}

//2//
var S, V, R, C, L;
do {
  S = prompt('Insira uma palavra/frase para ser codificada: \nAcentos e Ç não são permitidos.').toUpperCase().trim();
  for (C = 0, V = false; C < S.length; C++) {
    if ((S.charCodeAt(C) < 65 || S.charCodeAt(C) > 90) && S.charCodeAt(C) != 32) {
      alert('Caracteres não permitidos inseridos. Insira somente letras e espaços, se necessário:');
      V = true;
      break;
    }
  }
} while (V == true || S == '');
for (C = 0, R = ''; C < S.length; C++) {
  if (S.charCodeAt(C) >= 65 && S.charCodeAt(C) <= 90) {
    L = S.charCodeAt(C) + 3;
    (L > 90) ? L = L - 90 + 64: L = L;
    R += String.fromCharCode(L);
  } else if (S.charCodeAt(C) == 32) {
    R += ' ';
  }
}
alert('A string codificada é: \n' + R);

//3//
var T, P, R, C, V, v, p;
do {
  T = prompt('Escreva um texto qualquer: \nAcentos são permitidos.').toLowerCase().trim();
  for (C = 0, V = false; C < T.length; C++) {
    if ((T[C] < 65 || T[C] > 90) && T[C] != ' ') {
      alert('Caracteres não permitidos inseridos. Insira somente letras, espaços e acentos, se necessário:');
      V = true;
      break;
    }
  }
} while (V == true || T == '');
do {
  P = prompt('Escreva uma sequência de palavras: \nHá diferença entre aquelas com acento/ç ou sem.').toLowerCase().trim();
  for (C = 0, V = false; C < P.length; C++) {
    if ((P[C] < 65 || P[C] > 90) && P[C] != ' ') {
      alert('Caracteres não permitidos inseridos. Insira somente letras, espaços e acentos, se necessário:');
      V = true;
      break;
    }
  }
} while (V == true || P == '');
R = '';
p = P.slice(P.lastIndexOf(' ')+1);
v = true;
while (v == true) {
  if (p == P) {
    v = false;
  }
  for (C = 0, V = ''; C < P.length; C++) {
    if (P[C] == ' ' || P[C] == undefined) {
      break;
    } else {
      V += P[C];
    }
  }
  if (T.indexOf(V) == -1) {
    R += V + ' ';
  }
  P = P.slice(P.replace(' ','-').indexOf('-')+1);
}
alert('As palavras que não aparecem no texto são: \n' + R);

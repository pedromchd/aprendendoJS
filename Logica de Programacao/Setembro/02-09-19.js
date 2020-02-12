//Fazer que o programa que verifique se o número romano é válido, caso afirmativo, exiba-o
var R, V, A, N, C, D, U;
do {
  R = prompt('Insira um número romano até 300:').toUpperCase();
  for (V = false, A = 0; A < R.length; A++) {
    if (R.charCodeAt(A) < 65 || R.charCodeAt(A) > 90) {
      alert('Insira somente letras!');
      V = true;
      break;
    }
  }
} while (V == true);
for (V = 'ABDEFGHJKMNOPQRSTUWYZ', A = 0; A < R.length; A++) {
  if (R.indexOf(V[A]) != -1) {
    alert('O número não é um número romano válido!');
    break;
  }
}
for (N = 0, A = 0; A < R.length; A++) {
  switch (R[A]) {
    case 'I':
    N += 1;
    break;
    case 'V':
    N += 5;
    break;
    case 'X':
    N += 10;
    break;
    case 'L':
    N += 50;
    break;
    case 'C':
    N += 100;
  }
}
n = N;
if (N > 300) {
  alert('Este número é maior que 300, insira um novo!');
}
C = 0; D = 0; U = 0;
if (N.toString().length == 3) {
  C = N.toString()[0];
  D = N.toString()[1];
  U = N.toString()[2];
} else if (N.toString().length == 2) {
  D = N.toString()[0];
  U = N.toString()[1];
} else {
  U = N.toString()[0];
}
console.log(R,N,C,D,U);
N = '';
if (C != 0) {
  if (C < 4) {
    N += 'C'.repeat(C);
  } //else
}
if (D != 0) {
  if (D < 4) {
    N += 'X'.repeat(D);
  } else if (D == 4) {
    N += 'XL';
  } else if (D == 9) {
    N += 'XC';
  } else {
    N += 'L' + 'X'.repeat(D-5);
  }
}
if (U != 0) {
  if (U < 4) {
    N += 'I'.repeat(U);
  } else if (U == 4) {
    N += 'IV';
  } else if (U == 9) {
    N += 'IX';
  } else {
    N += 'V' + 'I'.repeat(U-5);
  }
}
if (N == R) {
  alert(R + ' é um número válido e significa ' + n);
} else {
  alert(R + ' não é um número válido! ');
}
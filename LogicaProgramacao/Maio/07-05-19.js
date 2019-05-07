//IF
var N;
N = parseFloat(prompt('Digite um número'));
if (N > 0) {
  alert('Positivo');
}
if (N < 0) {
  alert('Negativo');
}

//ELSE
var N;
N = parseFloat(prompt('Digite um número'));
if (N > 0) {
  alert('Positivo');
} else {
  alert('Negativo');
}

var N;
N = parseFloat(prompt('Digite um número'));
if (N > 0) {
  alert('Positivo');
} else {
  if (N < 0) {
    alert('Negativo');
  } else {
    alert('Nulo')
  }
}

//ELSE IF
var N;
N = parseFloat(prompt('Digite um número'));
if (N > 0) {
  alert('Positivo');
} else if (N < 0) {
  alert('Negativo');
} else {
  alert('Nulo');
}


/*********
EXERCÍCIOS
*********/

//Diferença
var N1, N2;
N1 = parseInt(prompt('Insira um número'));
N2 = parseInt(prompt('Insira outro número'));
if (N1 > N2) {
  alert(N1-N2);
} else {
  alert(N2-N1);
}

//Fora da caixa
var N;
N = parseInt(prompt('Insira um número inteiro'));
if (N => 1 && N =< 9) {
  alert('O valor está na faixa permitida');
} else {
  alert('O valor está fora da faixa permitida');
}

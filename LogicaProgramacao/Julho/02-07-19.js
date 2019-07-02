//EXEMPLO while(true); continue; break;
alert('Digite 0 para sair');
while (true) {
  var N = parseFloat(prompt('Número'));
  if (N == 0 || isNaN(N)) {
    var S = prompt('Deseja sair?');
    if (S == 'S','s') {
      break; //sai do while indo para o alert('FIM')
    } else {
      continue; //volta para a primeria linha do while (teste de condição)
    }
  }
  if (N%2 == 0) {
    alert('O dobro de ' + N + ' é ' + N*2);
  } else {
    alert('O triplo de ' + N + ' é ' + N*3);
  }
}
alert('FIM');

/* Revisão de while
-- Escrever números de 1 a 10 */ 
var C = 1;
while (C <= 10) {
  console.log(C++);
}

/* Comando do...while
-- Testa a condição no final.
-- Executa o código que está no loop e depois 
testa para ver se repete ou não. */
var C = 1;
do {
  console.log(C++);
} while (C <= 10);

/*
for (inicialização; condição; incrementação) {
  comando;
  comando;
}
*/
//for Ex.;
for (C = 1; C <= 10; C++) {
  console.log(C);
}
//Quando eu sei as condições usa for, quando é bobagem usa while

var C, L;
L = parseInt(prompt('Insira o limite'));
for (C = 1; C <= 10; C++) {
  console.log(C**2); //Math.pow(C,2) || C*C
}

//FAZER A TABUADA COMPELTA COM for


//1//
/* Elaborar um programa que leia um número e exiba asteriscos na página, em linhas diferentes. A cada nova linha o número de asteriscos deverá ser icrementado. */
var N = parseInt(prompt('Insira um número'));
for (A = ''; N > 0; N--) {
  A += '*';
  console.log(A);
}

//2//
/* Digamos que o número de chincilas de uma fazenda triplica a cada ano, após o primeiro ano. Elaborar um programa que leia o número inicial de chincilas e anos e informe ano a ano o número médio previsto de chinchilas na fazenda. Validar a entrada para que o número inical de chincilas seja maior ou igual a 2 (um casal). */
var C, A, Y;
do {
  C = parseInt(prompt('Número de chinchilas no primeiro ano'));
} while (C < 2 || isNaN(C));
do {
  A = parseInt(prompt('Número de anos previstos'));
} while (A < 2 || isNaN(A));
//
for (Y=1; Y<=A; Y++, C*=3) {
  console.log(Y + 'o. ano: ' + C + ' chinchilas.');
}

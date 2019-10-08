/*.splice(início,quantidade)
V = [1,2,3,4,5];
V.splice(2,2); // V = [1,2,5]
*/

//CONSULTÓRIO MÉDICO
var A, M, m, L, N, I, J, V;
A = '';
V = [[],[]];
L = [[],[]];
N = 1;
m = 'Menu: \n1 - Adicionar \n2 - Urgência \n3 - Atender \n4 - Excluir \n5 - Sair'
console.log(m);
do {
  do {
    M = parseInt(prompt('Em atendimento: ' + A + '\nLista de espera:\n' + L[1].join('') + L[0].join('')));
  } while ([1,2,3,4,5].indexOf(M) == -1);
  switch (M) {
    case 1:
    do {
      M = prompt('Paciente para lista de espera:').trim().toLowerCase();
      for (I = 0; I < M.length; I++) {
        if (M[I] < 'a' || M[I] > 'z') {
          M = true;
          break;
        }
      }
      if (M == true) {
        continue;
      } else {
        M = M.split('');
        M[0] = M[0].toUpperCase();
        M = M.join('');
      }
    } while (M == true);
    V[0].push(M);
    L[0].push(N++ + '. ' + M + '\n');
    break;
    case 2:
    do {
      M = prompt('Paciente para urgência:').trim().toLowerCase();
      for (I = 0; I < M.length; I++) {
        if (M[I] < 'a' || M[I] > 'z') {
          M = true;
          break;
        }
      }
      if (M == true) {
        continue;
      } else {
        M = M.split('');
        M[0] = M[0].toUpperCase();
        M = M.join('');
      }
    } while (M == true);
    V[1].push('[U] ' + M);
    for (L = [[],[]], N = 1, I = 1; I >= 0; I--) {
      for (J = 0; J < V[I].length; J++) {
        L[I].push(N++ + '. ' + V[I][J] + '\n');
      }
    }
    break;
    case 3:
    if (V[1] == '') {
      A = V[0].splice(0,1);
    } else {
      A = V[1].splice(0,1);
    }
    for (L = [[],[]], N = 1, I = 1; I >= 0; I--) {
      for (J = 0; J < V[I].length; J++) {
        L[I].push(N++ + '. ' + V[I][J] + '\n');
      }
    }
    break;
    case 4:
    do {
      M = parseInt(prompt('Quem deseja remover da lista? \nLista de espera:\n' + L[1].join('') + L[0].join('')));
    } while (--M >= N);
    if (M < V[1].length) {
      V[1].splice(M,1);
    } else {
      M -= V[1].length;
      V[0].splice(M,1);
    }
    for (L = [[],[]], N = 1, I = 1; I >= 0; I--) {
      for (J = 0; J < V[I].length; J++) {
        L[I].push(N++ + '. ' + V[I][J] + '\n');
      }
    }
  }
} while (M != 5);
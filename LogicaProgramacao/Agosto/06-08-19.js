var a = "banana banana banana aba"
//lastIndexOF(string,inicio)
alert(a.lastIndexOf("banana")); //14
//startsWith(String) - endsWith(String)
alert(a.startsWith("banana")); //true
alert(a.endsWith("banana")); //false

//substr(inicio,qtde)
/* Extrai os caracteres de uma string começando 
de uma posição especificada e através da
quantidade de poisções informadas */
var b = "raciocinio logico";
alert(b.substr(11)); //"logico"
alert(b.substr(11,3)); //"log"

//substring(inicio,fim)
/* Extrai os caracteres de uma string entre
dois índices especificados */
var b = "raciocinio logico";
alert(b.substring(7)); //"nio logico"
alert(b.substring(11,14)); //"log"

//replace(string1,string2)
/* Prcoura na string a primeira ocorrência
de string1 e substitui por string2 */
var b = "raciocinio logico";
alert(b.replace("logico","matematico")); //raciocinio matematico

//trim(string)
/* Remove espaços em branco do 
início e do fim da string */
var b = "     teste     ";
alert(b.trim()); //"teste"

//slice(inicio,fim)
// Extrai parte de uma string semelhante ao substring()
var b = "raciocinio logico";
alert(b.slice(11,14)); //"log"
alert(b.slice(7)); //"nio logico"

S = "arara";
S.replace(/a/g,'e'); //"erere"
// /a - string a substituir
// /g - global (todas as ocorrências)
S = "Papagaio";
S.replace(/p/g,'x'); //"Paxagaio"
S.replace(/p/gi,'x'); //"xaxagaio"
// /i - case insensitive

S = "ararararaAarararara";
S.slice(0,S.indexOf('A')).replace(/a/g,'e');


//LISTA DE EXERCÍCIOS

//1//
var P, L;
P = prompt('Palavra em inglês:').toLowerCase();
L = P.slice(1) + P[0] + 'ay';
alert(L);

//2//
var P, L, O;
P = prompt('Palavra:').toUpperCase();
L = prompt('Letra:').toUpperCase();
O = 0;
if (P.indexOf(L) != -1) {
  while (O <= P.length) {
    P = P.slice(P.indexOf(L)+1);
    O++;
  }
}
alert('Há ' + O + ' ocorrências de ' + L + ' na palavra');

//3//
var P;
P = prompt('Palavra').toLowerCase();
P = P.replace(P[0],P[0].toUpperCase());
alert(P);

//4//
var D, N, S;
D = prompt('DDD:');
N = prompt('Número de telefone:');
if (N.length == 9 && N[0] == 9) {
  N = N.slice(1);
}
S = '(' + D + ') ' + N.slice(0,4) + '-' + N.slice(4); 
alert(S);

//5//
var T, D, N, V, Tc, C;
do {
  T = prompt('Telefone');
  for (V = false, C = 0; C < T.length; C++) {
    Tc = T.charCodeAt(C);
	if (Tc > 64 && Tc < 91 || Tc > 96 && Tc < 123) {
	  V = true;
      break;
	}
  }
  if (V == true) {
	continue;
  } else {
	V = false;
  }
} while (V == true);
D = T.slice(T.indexOf('(')+1,T.lastIndexOf(')')).trim();
N = T.slice(T.indexOf(')')+1).trim().replace('-','');
if (N.length == 9 && N[0] == 9) {
  N = N.replace(9,'');
}
console.log(D,N);

//6//
var P, Y;
P = prompt('Palavra em inglês').toLowerCase();
switch (P[P.length -1]) {
  case 'y':
    Y = P[P.lastIndexOf('y') -1]
	if ('aeiou'.indexOf(Y) != -1) {
      P += 's'
	} else {
	  P = P.slice(0,P.length -1) + 'ies';
	}
  break;
  case 'o': case 'x': case 'z':
    P += 'es';
  break;
  default:
    if (P.endsWith('ch') == true || P.endsWith('sh') == true || P.endsWith ('ss') == true ) {
	  P += 'es';
	} else {
	  P += 's';
	}
}
console.log(P);

//7//
var D, N;
D = prompt('Insira a data no formato DD/MM/AAAA');
N = D.slice(D.indexOf('/')+1,D.lastIndexOf('/'));
switch (N) {
  case '01':
    N = D.replace('/01/',' de janeiro de ');
  break;
  case '02':
    N = D.replace('/02/',' de fevereiro de ');
  break;
  case '03':
    N = D.replace('/03/',' de março de ');
  break;
  case '04':
    N = D.replace('/04/',' de abril de ');
  break;
  case '05':
    N = D.replace('/05/',' de maio de ');
  break;
  case '06':
    N = D.replace('/06/',' de junho de ');
  break;
  case '07':
    N = D.replace('/07/',' de julho de ');
  break;
  case '08':
    N = D.replace('/08/',' de agosto de ');
  break;
  case '09':
    N = D.replace('/09/',' de setembro de ');
  break;
  case '10':
    N = D.replace('/10/',' de outubro de ');
  break;
  case '11':
    N = D.replace('/11/',' de novembro de ');
  break;
  case '12':
    N = D.replace('/12/',' de dezembro de ');
}
alert(N);
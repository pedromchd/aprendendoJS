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
S.replace(/a/g,'e');
// /a - string a substituir
// /g - global (todas as ocorrências)
S = "Papagaio";
S.replace(/p/g,'x');
S.replace(/p/gi,'x');
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
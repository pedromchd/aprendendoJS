//STRINGS JAVASCRIP

/*Índices de strings iniciam em 0
"R a q u e l"
 0 1 2 3 4 5
*/

//TIPOS DE DADOS
var b = true;
var x = 12.345;
var s = "chocolate";
//{ 'c', 'h', 'o', 'c', 'o', 'l', 'a', 't', 'e' }
//   0    1    2    3    4    5    6    7    8

var t = "raciocínio";
var u = "lógico";
alert(t + u); //raciocíniológico

alert("logica" == "logica"); //true
alert("LOGICA" == "logica"); //false

alert("abacate" < "abacaxi"); //true x > t (ASCII)

var x = "Raquel";
x.length; //6

var x = "     ola     ";
x.length; //13

var y = "logica";
alert(y.length); //6
alert("logica".length); //6
alert("Lógica de Programação!".length); //22

var x = "123abc";
x.charAt(0); //1
x[0]; //1
alert((x[0] >= 'a') && (x[0] <= 'z')); //false
alert((x[4] >= 'a') && (x[4] <= 'z')); //true

var S, C;
S = prompt('Digite seu nome:');
console.log('As letras do seu nome são:');
for (C = 0; C < S.length; C++) {
  console.log(S[C]); //S.charAt(C)
}

var t = "logica";
alert(t.toUpperCase()); //"LOGICA"
alert("LOGICA".toLowerCase()); //"logica"

alert("abc".charCodeAt(0)); //97
alert("ABC".charCodeAt(0)); //65
"1".charCodeAt(0); //49

alert(String.fromCharCode(97)): //"a"
alert(String.fromCharCode(72, 69, 76, 76, 79)); //"HELLO"

var y = String.fromCharCode("abc".charCodeAt(0) - 32) + String.fromCharCode("abc".charCodeAt(1) - 32) + String.fromCharCode("abc".charCodeAt(2) - 32); //"ABC"

var y = "" + 123; //"123"
var y = (123).toString(); //"123"

//Ler uma palavra e retorná-la invertida, em letras maiúsculas
var P, L, I;
P = prompt('Insira um palavra:');
for (I = '', L = 0; L < P.length; L++) {
  I = P[L] + I;
}
alert(I.toUpperCase());
//alert((P.split('').reverse().join('')).toUpperCase());
//alert(prompt('').split('').reverse().join('').toUpperCase())

var y = "abc";
y.repeat(2); //"abcabc";

/* indexOf(string,inicio)
Retorna a posição da primeira ocorrência da string informada
caso não encontre, retorna -1
o parâmetro de início é opcionla, com valor default */
var a = "banana banana banana aba"
var p1 = a.indexOf("n"); //2
var p2 = a.indexOf("n",p1+1); //4

var p1 = a.indexOf("banana"); //0
var p2 = a.indexOf("banana",p1+1); //7

alert(a.indexOF("abacaxi")); //-1

//TAREFA - FAZER UMA FORCA E TERMINAR O EXERCÍCIO DA OBI ÁLBUM DA COPA

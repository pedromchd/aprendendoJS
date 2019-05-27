//++ incremento
var x = 10;
x++;

//-- decremento
var y = 10;
y--;

/* 
Operador | Exemplo | Equivale a
  =         x = y     x = y
  +=        x += y    x = x + y
  -=        x -= y    x = x - y
  +=        x *= y    x = x * y
  /=        x /= y    x = x / y
  %=        x %= y    x = x % y
*/

var x = 10;
x += 5;

txt1 = 'Lógica ';
txt1 += 'de Programação';

x = 5 + 5; //10
y = '5' + 5; //'55'
y = '5' * 5; //25
z = 'Ola' + 5; //'Ola5'

/*
switch (variavel) {
  case n:
    comandos;
    break;
  case m:
    comandos;
    break;
  default:
    comandos;
}

//break = sai do switch
//default == else
*/

var dia = '';
var n = parseInt(prompt('Digite um número de 0 a 6'));
switch (n) {
  case 0:
    dia = 'Domingo';
    break;
  case 1:
    dia = 'Segunda-feira';
    break;
  case 2:
    dia = 'Terça-feira';
    break;
  case 3:
    dia = 'Quarta-feira';
    break;
  case 4:
    dia = 'Quinta-feira';
    break;
  case 5:
    dia = 'Sexta-feira';
    break;
  case 6:
    dia = 'Sábado';
    break;
}
alert(dia);

//PISTA
var c, n, t;
c = parseInt(prompt('Quanto pretende-se correr'));
n = parseInt(prompt('Insira o tamanho da pista circular'));
t = c%n;
alert('Deve deixar sua garrafa em '+ t);


//POSIÇÃO
var num, pos;
num = parseInt(prompt("Insira um número inteiro"));
pos = parseInt(prompt("Insira a posição"));
  console.log(num);
  console.log(pos);
num = num/Math.pow(10,pos);
  console.log(num);
pos = num-parseInt(num);
  console.log(pos);
pos *= 10;
  console.log(pos);
  console.log(parseInt(pos));

var n, p;
n = parseInt(prompt("Insira um número inteiro"));
p = parseInt(prompt("Insira a posição"));
n /= Math.pow(10,p);
n -= parseInt(n);
p = parseInt(n*10);
console.log(p);


//SEGUNDOS
var H, M, S, SOM;
H = parseInt(prompt("Insira as horas"));
M = parseInt(prompt("Insira os minutos"));
S = parseInt(prompt("Insira os segundos"));
SOM = parseInt(prompt("Insira os segundos a serem somados"));
SOM = H*3600 + M*60 + S + SOM;
H = parseInt(SOM/3600);
SOM %= 3600;
M = parseInt(SOM/60);
SOM %= 60;
S = SOM;
alert('A soma ficou '+ H +':'+ M +':'+ S);

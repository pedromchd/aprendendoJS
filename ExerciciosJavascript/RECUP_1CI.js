//1//
var t = parseInt(prompt('Insira quantas pessoas clicaram no terceiro link'));
alert(t*4 +' pessoas clicaram no terceiro link dessa busca');

//2//
var H, H1, H2, M, M1, M2, S, S1, S2;
H1 = parseInt(prompt('Insira hora 1'));
M1 = parseInt(prompt('Insira minuto 1'));
S1 = parseInt(prompt('Insira segundo 1'));
H2 = parseInt(prompt('Insira hora 2'));
M2 = parseInt(prompt('Insira minuto 2'));
S2 = parseInt(prompt('Insira segundo 2'));
S1 += H1*3600 + M1*60;
S2 += H2*3600 + M1*60;
S = parseInt((S2 - S1)/2);
H = parseInt(S/3600);
S %= 3600;
M = parseInt(S/60);
S %= 60;
alert(H +':'+ M +':'+ S);

//3//
var DDMMAA, DD, MM, AA;
DDMMAA = parseInt(prompt('Insira uma data no formato DDMMAA'));
DD = parseInt(DDMMAA/10**4);
MM = parseInt(DDMMAA/100)%(DD*100);
AA = DDMMAA - DD*10**4 - MM*100;
alert(''+ AA + MM + DD);

//4//
var n, mul;
n = parseInt(prompt('Insira um número inteiro n'));
mul = Math.floor(n/5)*5+5;
alert(mul);

//5//
var a, b, c, dt, x1, x2;
a = parseInt(prompt('a'));
b = parseInt(prompt('b'));
c = parseInt(prompt('c'));
dt = b**2 - 4*a*c;
x1 = (-b + Math.sqrt(dt))/(2*a);
x2 = (-b - Math.sqrt(dt))/(2*a);
alert('x1 = '+ x1.toFixed(2) +'\nx2 = '+ x2.toFixed(2) +'\nNaN para -dt');

//6//
var t, p;
t = parseInt(prompt('Insira o tempo em minutos de uso'));
p = 20 + Math.ceil((t-30)/15)*10;
alert(p);

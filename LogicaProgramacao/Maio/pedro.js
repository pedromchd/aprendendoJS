/***********************
PEDRO MACHADO - 11030373
LÓGICA DE PROGRAMAÇÃO
1o. BIMESTRE
PROF. RAQUEL BARBOSA
***********************/

//1// LAJOTAS
var L, C, laj1, laj2;
L = parseInt(prompt('Insira a largura L da sala'));
C = parseInt(prompt('Insira o comprimento C da sala'));
laj1 = C*L + (L-1)*(C-1);
laj2 = 2*(L-1) + 2*(C-1);
alert('Serão necessárias:\n'+ laj1 +' lajotas do tipo 1\n'+ laj2 +' lajotas do tipo 2');

//2// POSIÇÃO
var n, p;
n = parseInt(prompt('Insira um número inteiro n'));
p = parseInt(prompt('Insira a posição p de n'));
n /= Math.pow(10,p);
n -= parseInt(n);
p = parseInt(n*10);
alert('O valor da posição p de n é '+ p);

//3// HORAS
var D, H, H1, H2, M, M1, M2, S, S1, S2;
H1 = parseInt(prompt('Insira hora 1'));
M1 = parseInt(prompt('Insira minuto 1'));
S1 = parseInt(prompt('Insira segundo 1'));
H2 = parseInt(prompt('Insira hora 2'));
M2 = parseInt(prompt('Insira minuto 2'));
S2 = parseInt(prompt('Insira segundo 2'));
S1 += H1*3600 + M1*60;
S2 += H2*3600 + M2*60;
S = S1 + S2;
H = parseInt(S/3600);
S %= 3600;
M = parseInt(S/60);
S %= 60;
D = parseInt(H/24);
alert('A soma é '+ H +':'+ M +':'+ S +'\nLogo:\n'+ D +' dia(s), '+ H%24 +'h, '+ M +'min e '+ S +'s');

//4// DATAS
var D, D1, D2, M1, M2, A1, A2;
D1 = parseInt(prompt('Insira dia 1'));
M1 = parseInt(prompt('Insira mês 1'));
A1 = parseInt(prompt('Insira ano 1'));
D2 = parseInt(prompt('Insira dia 2'));
M2 = parseInt(prompt('Insira mês 2'));
A2 = parseInt(prompt('Insira ano 2'));
D1 += A1*360 + M1*30;
D2 += A2*360 + M2*30;
D = D2 - D1;
alert('Entre as duas datas há '+ D +' dias');

//5// RAÍZES
var a, b, c, dt, x1, x2;
a = parseFloat(prompt('Coeficiente a'));
b = parseFloat(prompt('Coeficiente b'));
c = parseFloat(prompt('Coeficiente c'));
dt = Math.pow(b,2) - 4*a*c;
x1 = (-b + Math.sqrt(dt) ) / (2*a);
x2 = (-b - Math.sqrt(dt) ) / (2*a);
alert('X1: '+ x1.toFixed(2) +'\nX2: '+ x2.toFixed(2) +'\n*NaN = delta negativo, não há raízes reais');

//6// LAN-HOUSE
var valor15Min, tempoUso, valorPagar;
valor15Min = parseFloat(prompt('Insira o valor de cada 15min de uso'));
tempoUso = parseInt(prompt('Insira o tempo de uso por um cliente, em min'));
valorPagar = tempoUso /15 *valor15Min;
alert('O valor a ser pago é de R$'+ parseInt(valorPagar).toFixed(2));

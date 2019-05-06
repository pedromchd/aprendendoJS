var time1, time2, v1, v2, e1, e2, d1, d2, pon1, pon2;
time1 = prompt('Insira o nome do time 1');
time2 = prompt('Insira o nome do time 2');
v1 = parseInt(prompt('Insira o número de vitórias do time 1'));
e1 = parseInt(prompt('Insira o número de empates do time 1'));
d1 = parseInt(prompt('Insira o número de derrotas do time 1'));
v2 = parseInt(prompt('Insira o número de vitórias do time 2'));
e2 = parseInt(prompt('Insira o número de empates do time 2'));
d2 = parseInt(prompt('Insira o número de derrotas do time 2'));
pon1 = v1*3 + e1*1 + d1*0;
pon2 = v2*3 + e2*1 + d2*0;
if (pon1 > pon2) {
  alert("O time "+ time1 +" ganhou!"); 
}
if (pon1 < pon2) {
  alert("O time "+ time2 +" ganhou!"); 
}

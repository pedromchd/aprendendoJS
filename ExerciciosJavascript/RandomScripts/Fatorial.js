/*****************
ALGORITMO Fatorial
*****************/

//Maurício
fator = prompt("Digite um número para descobri seu faorial");
c = fator;
resultado = 1;
while (c>=1){
    resultado*=c;
    c--;
}
if (fator<=0){
    alert("-1");
}
alert(resultado);

//Pedro 1
var num, fat;
num = parseInt(prompt("Digite um número"));
fat = 1;
if (num >= 1) {
    do {
        fat *= num;
        num--;
    } while (num >= 1);
    alert(fat);
} else {
    fat = (num == 0) ? 1: "NaN";    
    alert(fat);
}

//Pedro 2
var n, f;
n = parseInt(prompt('n'));
f = (n >= 0) ? 1: 'NaN';
for (n; n>=1; n--) { 
  f *= n;
}
alert(f);

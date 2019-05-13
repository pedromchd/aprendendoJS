//ALGORITMO Fatorial
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


var n, f;
n = parseInt(prompt('n'));
f = (n >= 0) ? 1: 'NaN';
for (n; n>=1; n--) { 
  f *= n;
}
alert(f);

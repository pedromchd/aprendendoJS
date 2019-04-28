//ALGORITIMO Pizzaria
var qntPiz, qntRef, toPiz, toRef, desc, toFinal;
qntPiz = parseFloat(prompt("A pizza custa R$30, quantas gostaria?"));
qntRef = parseFloat(prompt("O refrigerante está a R$5, quantos deseja?"));
toPiz = qntPiz*30;
toRef = qntRef*5;
desc = (toPiz + toRef)*0.05;
toFinal = toPiz +toRef -desc;
alert(toFinal);

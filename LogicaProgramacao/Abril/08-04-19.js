/* Dado um número de 3 algarismos n=CDU, onde:
    C é o algarismo das centenas;
    D é o algarismo das dezenas;
    U é o algarismo das unidades;
Considere o número m constituído pelos algarismos de n em ordem inversa
Isto é, m=UDC.
Geral m a partir de n. */

//TENTATIVA 1
var n, m, c, d, u;
n = parseFloat(prompt("Insira um número N de 3 algarismos"));
c = Math.floor(n/100);
d = Math.floor((n-c*100)/10)*10;
u = (n-c*100-d)*100;
m = c + d + u;
alert(m);
//console.log(c,d,u,m);
//alert(c+""+d+""+u);

//TENTATIVA 2
var n, c, d, u;
n = parseFloat(prompt("Insira um número N de 3 algarismos"));
c = n-n%100;
console.log(c)
u = n-(n-n%10);
console.log(u)
d = n-c-u;
console.log(d)
alert(u+""+d/10+""+c/100);

//MELHOR RESPOSTA
var n, c, d, u;
n = parseFloat(prompt("Insira um número N de 3 algarismos"));
c = Math.floor(n/100);
d = Math.floor(n%100/10);
u = n%100%10
alert(""+u+d+c);


/* Leia um número inteiro qualquer 
e peça o número de casas decimais a ser arredondado */

var n, cas;
n = parseInt(prompt("Insira um número"));
cas = parseInt(prompt("Número de casas a ser arredondada"));
n = n/Math.pow(10,cas);
alert(n);

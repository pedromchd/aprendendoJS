//ALGORITMO Fatorial
/********************** * * * * * * * * * * * * * * * * * * *
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
* * * * * * * * * * * * * * * * * * ***********************/

var n, f;
n = parseInt(prompt('Insira um número'));
f = (n >= 0) ? 1: 'NaN';
for (; n>1; n--) f *= n;
alert(f);

/* * * * * * * * * * * * * * * * * * * */

//ALGORITMO ParImpar
/**********************************
var n1,n2,re,ip;
n1=parseInt(prompt("Pacela 1"));
n2=parseInt(prompt("Parcela 2"));
re=n1+n2; ip=re%2;
if(ip==0){alert(re + ", par");} 
else{alert(re + ", impar");}
**********************************/

var n1, n2;
n1 = parseInt(prompt('Insira n1'));
n2 = parseInt(prompt('Insira n2'));
if ((n1 + n2)%2 == 0) alert('Par');
else alert('Ímpar');

/* * * * * * * * * * * * * * * * */

//1_MaiorMenor
/******************************* 
var n,t,m;
t=0; m=0;
while (n != '' || n == '') {
n=prompt('Insira números');
if(n == '')break;
t+=parseInt(n);
m++;
console.log(n, t, m);}
alert(t/m); 
*******************************/

var n, t, m;
t = 0;
for (m=0; ; m++) {
	n = prompt('Insira um número');
	if (n == '') break;
	t += parseInt(n);
}
alert(t/m);


//2_QuadradoSoma
var n1, n2, n3, n4, n5, somaq;
n1 = Math.pow(parseFloat(prompt("Insira n1")),2);
n2 = Math.pow(parseFloat(prompt("Insira n2")),2);
n3 = Math.pow(parseFloat(prompt("Insira n3")),2);
n4 = Math.pow(parseFloat(prompt("Insira n4")),2);
n5 = Math.pow(parseFloat(prompt("Insira n5")),2);
somaq = Math.pow(n1+n2+n3+n4+n5,2);
alert(n1 +' '+ n2 +' '+ n3 +' '+ n4 +' '+ n5 +'\n'+ somaq);


//3_Maior
var n1, n2, n3, n4, n5, maior;
n1 = parseFloat(prompt("Insira n1"));
n2 = parseFloat(prompt("Insira n2"));
n3 = parseFloat(prompt("Insira n3"));
n4 = parseFloat(prompt("Insira n4"));
n5 = parseFloat(prompt("Insira n5"));
alert(Math.max(n1,n2,n3,n4,n5));


//4_MaiorIdade
/*****************************************
var idade maior18;
idade=0; maior18='';
while(idade >= 0){
idade=prompt('Insira idades');
if(idade=='')break;
if(parseInt(idade)<=18)idade='';
maior18+=idade+' ';}
alert(maior18); 
*****************************************/

var i, ma18, me18;
ma18 = '';
me18 = '';
ig18 = '';
for (i=0; ;) {
	i = prompt('Idade');
	if (i == '') break;
	if (i < 18) me18 += 'i';
	else if (i > 18) ma18 += 1;
	else ig18 += 1;
	console.log(i);
}
alert('Maior de 18: ' + ma18.length + '\nMenor de 18: ' + me18.length + '\nCom 18 anos: ' + ig18.length);
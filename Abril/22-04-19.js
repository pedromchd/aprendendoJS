//TOMADAS
var T1, T2, T3, T4, T
T1 = parseInt(prompt("Insira numero de tomadas de T1"));
T2 = parseInt(prompt("Insira numero de tomadas de T2"));
T3 = parseInt(prompt("Insira numero de tomadas de T3"));
T4 = parseInt(prompt("Insira numero de tomadas de T4"));
T = (T1+T2+T3+T4)-3;
alert(T +" tomadas estão disponíveis");


//MATRÍCULA
var ASD, AA, S;
ASD = parseInt(prompt("Insira a matricula"));
AA = parseInt(ASD/Math.pow(10,5));
S = parseInt(ASD/Math.pow(10,4)-AA*10);
alert("ANO: 20"+ AA +" SEMESTRE: "+ S);


//MÚLTIPLO
//Tentativa1
var n, m;
n = parseInt(prompt("Insira um número inteiro"));
m = n-n%5;
alert("O múltiplo de 5 anterior a "+ n +" é "+ m);

//Correção
var n, m;
n = parseInt(prompt("Insira um número inteiro"));
m = n-1-(n-1)%5;
//m = Math.ceil(n/5)*5-5;
alert("O múltiplo de 5 anterior a "+ n +" é "+ m);

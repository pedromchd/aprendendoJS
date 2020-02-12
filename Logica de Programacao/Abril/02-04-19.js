//VALGORITMO Restaurante
var precoKg, consumG, total;
precoKg = parseFloat(prompt("Boa tarde e bem vindo. Insira o valor por kg do restaurante"));
consumG = parseFloat(prompt("Insira a quantidade de gramas consumida pelo cliente"));
total = consumG/1000*precoKg;
alert("O calor a ser pago é de R$" + total);

//ALGORITMO DuracaoEvento
var H1, H2, M1, M2, S1, S2, dur1, dur2, durEvento;
H1 = parseFloat(prompt("Insira a hora de inicio"));
M1 = parseFloat(prompt("Insira o minuto de inicio"));
S1 = parseFloat(prompt("Insira o segundo de inicio"));
H2 = parseFloat(prompt("Insira a hora de termino"));
M2 = parseFloat(prompt("Insirao minuto de termino"));
S2 = parseFloat(prompt("Insira o segundo de termino"));
dur1 = (H1*3600)+(M1*60)+S1;
dur2 = (H2*3600)+(M2*60)+S2;
durEvento = parseInt((dur2-dur1)/60);
alert("A duracao do evento é de: " + durEvento + " minutos");

//ALGORITMO Distancia
var x1, y1, x2, y2, d;
x1 = parseFloat(prompt("Insira x1"));
y1 = parseFloat(prompt("Insira y1"));
x2 = parseFloat(prompt("Insira x2"));
y2 = parseFloat(prompt("Insira y2"));
d = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
alert("A distancia é: " + d);

//ALGORITMO Salario
var sal, nom, vend, car;
nom = prompt("Insira o nome do vendedor");
car = parseFloat(prompt("Insira a quantidade de carros vendidos"));
vend = parseFloat(prompt("Insira o valor total das vendas"));
sal = 500+(car*50)+(vend*0.05);
alert("O salario de " + nom + " é R$" + sal);

//SORTEIO NUMEROS 0-9
Math.ceil(Math.random()*10);

//SORTEIO NUMEROS 1-10
Math.floor(Math.random()*10+1);

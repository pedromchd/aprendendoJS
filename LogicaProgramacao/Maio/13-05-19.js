//else if

//CALCULADORA v1
var n1, n2, op, res;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação: + - * /');
n2 = parseFloat(prompt('Insira outro número'));
if (oper == '+') {
    res = n1 + n2;
}
if (oper == '-') {
    res = n1 - n2;
}
if (oper == '*') {
    res = n1 * n2;
}
if (oper == '/') {
    res = n1 / n2;
}
alert(resul);


//CALCULADORA v2
var n1, n2, op, res;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação [+] [-] [*] [/] [**] [rt] [%]');
if (op == '**' || op == 'rt') {
	n2 = parseInt(prompt('Insira o expoente/índice'));
	if (op == '**') {
		res = n1**n2;
	} else {
		res = n1**(1/n2);
	}
} else {
	n2 = parseFloat(prompt('Insira outro número'));
}
if (op == '+') {
	res = n1 + n2;
}
if (op == '-') {
	res = n1 - n2;
}
if (op == '*') {
	res = n1 * n2;
}
if (op == '/') {
	res = n1 / n2;
}
if (op == '%') {
	res = n1 % n2;
}
alert(res);


//SORTEIO
var n, s;
n = parseInt(prompt('Insira um número inteiro n'));
s = Math.round(Math.random()*10);
if (n == s) {
    alert('Você ganhou');
} else {
    alert('Você perdeu, o número era '+ s);
}

//SORTEIO
var n, s;
n = parseInt(prompt('Insira um número inteiro n'));
s = Math.round(Math.random()*10);
if (n == s) {
    alert('Você acertou');
} else {
    alert('Você errou');
	if (s%5 == 0) {
		alert('O número é múltiplo de 5');
	} else if (s%2 == 0) {
		alert('O número é par');
	} else {
		alert('O número é ímpar');
	}
	n = parseInt(prompt('Segunda tentativa'));
	if (n == s) {
		alert('Você acertou');
	} else {
		alert('Você errou, o número era '+ s);
	}
}

//SORTEIO
var n, s;
n = parseInt(prompt('Insira um número inteiro n'));
l = parseInt(prompt('Insira um límite de números a serem sorteados'));
s = Math.round(Math.random()*l);
if (n == s) {
    alert('Você acertou');
} else {
    alert('Você errou');
    if (s >= 0 && s <= 4) {
        alert('O número está entre 0 e 4')
    } else if (s%2 == 1) {
        alert('O número é ímpar')
    } else if (s < 6 || s > 7 || s < 9) {
        alert('O número é, ou menor que 6 e 9, ou maior que 7')
    }
    n = parseInt(prompt('Segunda tentativa'));
    if (n == s) {
        alert('Você acertou');
    } else {
        alert('Você errou de novo');
        if (s%5 == 0) {
            alert('O número é múltiplo de 5');
        } else if (s == 2 || s == 3 || s == 5 || s == 7) {
            alert('O número é primo');
        } else if (s%2 == 0) {
            alert('O número é par');
        }
        n = parseInt(prompt('Terceira tentativa'));
        if (n == s) {
            alert('Você acertou');
        } else {
            alert('Você errou, o número era '+ s);
        }
    }
}

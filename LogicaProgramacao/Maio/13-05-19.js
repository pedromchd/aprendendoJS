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


//CALCULADORA v3
var n1, n2, op, res;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação [+] [-] [*] [/] [**] [rt] [%]');
if (op == 'trunc' || op == 'pos') {
  n1 = parseInt(n1);
  n2 = parseInt(prompt('Insira as casas a truncar/a posição a se achar'));
  if (op == 'trunc') {
    res = n1/(10**n2);
  } else {
    n1 /= Math.pow(10,n2);
    n2 -= parseInt(n1);
    res = parseInt(n2*10);
  } 
} else if (op == '**' || op == 'rt') {
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


//SORTEIO v1
var n, s;
n = parseInt(prompt('Insira um número inteiro n'));
s = Math.round(Math.random()*10);
if (n == s) {
  alert('Você ganhou');
} else {
  alert('Você perdeu, o número era '+ s);
}


//SORTEIO v2
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


//SORTEIO v3
var n, s;
l = parseInt(prompt('Insira a quantidade de númeos a serem sorteados'));
s = Math.round(Math.random()*l);
//TENTATIVA1
n = parseInt(prompt('Insira um número inteiro n'));
if (n == s) {
  alert('Você acertou');
} else {
  alert('Você errou');
  //DICA1
  if (s%5 == 0) {
    alert('O número é múltiplo de 5');
  } else if (s%2 == 0) {
    alert('O número é par');
  } else {
    alert('O número é ímpar');
  }
  //TENTATIVA2
  n = parseInt(prompt('Segunda tentativa'));
  if (n == s) {
    alert('Você acertou');
  } else {
    alert('Você errou de novo');
    //DICA2
    if (parseInt(s**(1/2)) != (s**(1/2))) {
      alert('A sua raiz quadrada não é exata');
    } else {
      alert('Sua raiz quadrada é exata');
    }
    //TENTATIVA3
    n = parseInt(prompt('Terceira tentativa'));
    if (n == s) {
      alert('Você acertou');
    } else {
      alert('Você errou, o número era '+ s);
    }
  }
}

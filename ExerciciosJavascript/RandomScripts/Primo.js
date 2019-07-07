var N, P, D;
N = parseInt(prompt('Insira um número'));
for (P = 0, D = 1; D <= 10; D++) {
    if (N/D == parseInt(N/D)) {
        P += N/D;
    }
}
if (P == N+1) {
    alert('É primo');
} else {
    alert('Não é primo');
}


var Q, N, P, C, D;
Q = parseInt(prompt('Mostrar quantos números primos?'));
for (P = '', N = 1; Q > 0; N++) {
	for (D = 0, C = N; C > 0; C--) {
		if (N/C == parseInt(N/C)) {
			D += N/C;
		}
	}
	if (D == N+1) {
		P += N + ' ';
		Q--;
	} 
}
alert(P);

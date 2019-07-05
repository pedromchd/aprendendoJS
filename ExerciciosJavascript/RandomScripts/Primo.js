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
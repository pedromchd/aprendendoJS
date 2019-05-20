/************
PEDRO MACHADO
LÓGICA 2o BIM
PROFa. RAQUEL
************/

//1//
var i;
i = parseInt(prompt('Idade de uma pessoa'));
if (i <= 10) {
    alert('O valor a ser pago é de R$30,00');
} else if (i > 10 && i <= 29) {
    alert('O valor a ser pago é de R$60,00');
} else if (i > 29 && i <= 45 ) {
    alert('O valor a ser pago é de R$120,00');
} else if (i > 45 && i <= 59) {
    alert('O valor a ser pago é de R$150,00');
}else if (i > 59 && i <= 65) {
    alert('O valor a ser pago é de R$250,00');
}else if (i > 65) {
    alert('O valor a ser pago é de R$400,00');
}

//2//
var A, B, C;
A = parseInt(prompt('Primeiro ângulo'));
B = parseInt(prompt('Segundo ângulo'));
C = parseInt(prompt('Terceiro ângulo'));
if ( (A + B + C) == 180) {
    //Formam um triângulo
    if (A == 90 || B == 90 || C == 90) {
        alert('Os ângulos inseridos formam um triângulo retângulo');
    } else if (A > 90 || B > 90 || C > 90) {
        alert('Os ângulos inseridos formam um triângulo obtusângulo');
    } else if (A < 90 || B < 90 || C < 90) {
        alert('Os ângulos inseridos formam um triângulo acutângulo');
    }
} else {
    alert('Os ângulos inseridos não formam um triângulo');
}

//3//
var H, L, HL, A, B, C, AB, AC, BC;
alert('Todas as dimensões devem ser informadas em centímetros!');
H = parseInt(prompt('Altura da maior janela do cliente'));
L = parseInt(prompt('Largura dessa mesma janela'));
A = parseInt(prompt('Insira a altura da caixa'));
B = parseInt(prompt('Insira a largula da caixa'));
C = parseInt(prompt('Insira a profundidade da caixa'));
HL = H * L;
AB = A * B;
AC = A * C;
BC = B * C;
if (AB < HL || AC < HL || BC < HL) {
    alert('O drone será capaz de entregar a compra pela janela');
} else {
    alert('O drone não será capaz de entregar a compra, solicite a entrega convencional');
}

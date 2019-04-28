//PARIDADE_FUNCAO
var a, b, F1, F_1;
a = parseInt(prompt("Insira o termo A da função afim ax+b"));
b = parseInt(prompt("Insira o termo B"));
F1 = 1*a + b;
F_1 = -1*a + b;
if (F1 == F_1) {
  alert("Função par");
} else if (F1 == F_1*-1) {
  alert("Função ímpar");
} else {
  alert("Função sem paridade");
}

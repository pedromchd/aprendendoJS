/* Faça um programa que calcule o IMC de uma pessoa 
e classifique-a conforme a tabela
>20 ABAIXO DO PESO
>=20 <25 PESO NORMAL
>=25 <30 SOBREPESO
>=30 <40 OBESO
>=40 OBESO MÓRBIDO
*/
var h, kg, imc;
kg = parseFloat(prompt('Insira o peso em kg'));
h = parseFloat(prompt('Insira a altura em metros'));
imc = (kg/h**2).toFixed(2);
if (imc < 20) {
  alert('ABAIXO DO PESO, IMC '+ imc);
}
if (imc >= 20 && imc < 25) {
  alert('PESO NORMAL, IMC '+ imc);
}
if (imc >= 25 && imc < 30) {
  alert('SOBREPESO, IMC '+ imc);
}
if (imc >= 30 && imc < 40) {
  alert('OBESO, IMC '+ imc);
}
if (imc > 40) {
  alert('OBESO MÓRBIDO, IMC '+ imc);
}

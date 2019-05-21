//Inversão
var n1, al, t, res;
n1 = prompt('Insira um número');
al = n1.length;
n1 = parseInt(n1);
res = '';
while (al > 0) {
  al--;
  t = parseInt(n1 / 10**al);
  n1 -= t * 10**al;
  res = t + res;
}
alert(res);
//BOT PROB
function botProb() {
  var len, arr, srt, pos;
  len = Math.ceil(Math.random() * 10);
  for (var I = 0, arr = []; I < len; I++) {
    srt = Math.round(Math.random());
    arr.push(srt);
  }
  pos = Math.floor(Math.random() * len);
  return M == 3 && V%2 != 0 && Boolean(arr[pos]);
}
function botPick() {
  var aux;
  T = T.join('.');
  H = H.join('.');
  aux = H.indexOf(P1);
  if (T[aux] != '❏') {
    aux = H.lastIndexOf(P1);
  }
  T = T.split('');
  T[aux] = P1;
  T = T.join('');
  T = T.split('.');
  H = H.split('.');
  for (var I = 0; I < T.length; I++) {
    T[I] = T[I].split(',');
    H[I] = H[I].split(','); 
  }
  P2 = P1;
}

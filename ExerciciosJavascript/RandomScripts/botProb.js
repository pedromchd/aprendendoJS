//BOT PROB
function botProb() {
  var len, arr, srt, pos;
  len = Math.ceil(Math.random() * 10);
  for (var I = 0, arr = []; I < len; I++) {
    srt = Math.round(Math.random());
    arr.push(srt);
  }
  pos = Math.floor(Math.random() * len);
  return prb = Boolean(arr[pos]);
}
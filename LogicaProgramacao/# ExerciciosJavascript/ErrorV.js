for (IN = '', CH = 0; CH <= NL; CH++) {
  if (CH != NL) {
    if (IN.indexOf(PS.indexOf(PE[CH])) != -1) {
      IN += PS.lastIndexOf(PE[CH]);
    } else {
      IN += PS.indexOf(PE[CH]);
    }
  } else {
    IN = IN.replace(/-1/g,'');
    for (AE = '', PC = 0; PC < IN.length; PC++) {
      if (AE.indexOf(IN[PC]) != -1) {
        continue;
      }
      AE += IN[PC];
    }
    AE = NL - AE.length;
  }
}

for (IN = '', AC = 0; AC <= NL; AC++) {
  if (AC != NL) {
    if (IN.indexOf(PS.indexOf(PE.toLowerCase()[AC])) != -1) {
      IN += PS.lastIndexOf(PE.toLowerCase()[AC]);
    } else {
      IN += PS.indexOf(PE.toLowerCase()[AC]);
    }
  } else {
    IN = IN.replace(/-1/g,'');
    for (AE = '', AC = 0; AC < IN.length; AC++) {
      if (AE.indexOf(IN[AC]) != -1) {
        continue;
      }
      AE += IN[AC];
    }
    AE = NL - AE.length;
    AC = NL;
  }
}
for (RS = false, RE = false, AC = 0; AC < NL; AC++) {
  IN = PS.indexOf(PE.toLowerCase()[AC]);
  OC = PS.lastIndexOf(PE.toLowerCase()[AC]);
  if (IN != OC) {
    RS = true;
  }
  FI = PE.toLowerCase().indexOf(PS[AC]);
  LI = PE.toLowerCase().lastIndexOf(PS[AC]);
  if (FI != LI) {
    RE = true;
  }
  if (RS == true && RE == true) {
    AE = LE;
  }
}
(AE > LE) ? LE = AE: LE = LE; 

/*
var AE, AC, IN, RE, RS;
AE - Algarismos errados
AC - Analizador de caracteres
IN - Indexes de letras
RE - Repetições escolhida
RS - Repetições sorteada
*/
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
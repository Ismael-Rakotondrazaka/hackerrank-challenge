function MajMin(chaine) {
  // Ecrivez votre code ici
  const mins = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const majs = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let result = "";

  for (let i = 0; i < chaine.length; i++) {
    const element = chaine.charAt(i);
    if (mins.includes(element)) {
      result +=(majs[mins.indexOf(element)]);
    } else if (majs.includes(element)) {
      result +=(mins[majs.indexOf(element)]);
    } else {
      result +=(element);
    }

    // console.log(mins.length, majs.length);
  }

  return result;
}

console.log(MajMin("azERTyop"));

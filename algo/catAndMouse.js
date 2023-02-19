function designerPdfViewer(h, word) {
  // Write your code here
  const alphabet = [
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

  let maxIndexes = 0;
  let maxHeight = 0;
  let wordSet = [...new Set(word)];
  console.log(wordSet);
  wordSet.forEach((value, i, arr) => {
    const index = alphabet.indexOf(value);
    console.log(index, "ate", h[index], maxHeight, i);
    if (h[index] > maxHeight) {
      maxHeight = h[alphabet.indexOf(value)];
      maxIndexes = i;
    }
  });
  console.log(maxHeight * 1 * word.length);
}

designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7
  ],
  "zaba"
);

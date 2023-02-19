weightedUniformStrings("abccddde", [1, 3, 12, 5, 9, 10]);

function weightedUniformStrings(s, queries) {
  // Write your code here
  let alphabet = [
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
  let red = new Set();
  let result = [];
  if (s.length === 1) {
    red.add(s[0]);
  } else {
    let same = 0;
    for (let i = 1; i < s.length; i++) {
      const elem = s[i];
      if (elem === s[i - 1]) {
        same++;
      } else {
        // if (same !== 0) {
        red.add({ [s[i - 1]]: alphabet.indexOf(s[i - 1]) + 1 });
        // }
        same = 1;
      }
      console.log(s[i - 1], elem, red);
    }
    console.log(red);
  }

  for (let i = 0; i < queries.length; i++) {
    result.push(red.has(queries[i]) ? "YES" : "NO");
  }

  console.log(result);
  return result;
}

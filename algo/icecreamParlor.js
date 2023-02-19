function icecreamParlor(m, arr) {
  // Write your code here
  let first = 0;
  let second = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const leftOvers = m - element;
    indexLeftOvers = arr.indexOf(leftOvers, i + 1);
    // console.log("leftOvers", leftOvers, "indexLeftOvers", indexLeftOvers);

    if (indexLeftOvers != -1) {
      first = i + 1;
      second = indexLeftOvers + 1;
      break;
    }
  }

  console.log(first, second);
}

icecreamParlor(6, [1, 3, 4, 5, 6]);
icecreamParlor(4, [1, 4, 5, 3, 2]);
icecreamParlor(4, [2, 2, 4, 3]);

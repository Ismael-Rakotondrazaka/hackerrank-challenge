function test(arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  let keys = [];
  let values = [];

  if (arrSorted.length > 0) {
    keys = [arrSorted[0]];
    values = [1];

    let subjectIndex = 0;

    let last = arrSorted[0];

    for (let i = 1; i < arrSorted.length; i++) {
      if (arrSorted[i] === last) {
        values[subjectIndex] = values[subjectIndex] + 1;
        /* } else if (i === arrSorted.length - 1) {
        
        continue; */
      } else {
        keys[subjectIndex + 1] = arrSorted[i];
        values[subjectIndex + 1] = 1;
        subjectIndex++;
        last = arrSorted[i];
      }
    }
  }

  let maxIndex = [];
  const max = values.reduce((prev, curr) => {
    if (curr > prev) {
      return curr;
    }
    return prev;
  }, -1);
  values.forEach((value, i) => {
    if (value === max) {
      maxIndex.push(i);
    }
  });
  let result;
  if (maxIndex === 1) {
    result = keys[values.indexOf(max)];
  } else {
    let maxValues = maxIndex.map((value) => {
      return keys[value];
    });
    maxValues = maxValues.sort((a, b) => a - b);
    result = maxValues[0];
  }

  return result;
}

console.log(test([10, 5, 20, 20, 4, 5, 2, 25, 1]));
console.log(test([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
console.log(test([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
console.log(test([1, 2, 2]));
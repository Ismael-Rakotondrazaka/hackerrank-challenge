function pickingNumbers(a) {
  // Write your code here

  let result = 0;
  let supCount = 0;
  let infCount = 0;
  let eqCount = 0;
  for (let i = 0; i < a.length - 1; i++) {
    const element = a[i];
    let tempResult = 0;
    supCount = 0;
    infCount = 0;
    eqCount = 0;
    for (let j = i + 1; j < a.length; j++) {
      const element2 = a[j];
      if (Math.abs(element - element2) <= 1) {
        tempResult++;
        if (element2 > element) {
          supCount++;
        } else if (element2 < element) {
          infCount++;
        } else {
          eqCount++;
        }
      }
    }
    if (supCount >= infCount) {
      tempResult -= infCount;
      tempResult = supCount + eqCount;
    } else {
      tempResult -= supCount;
      tempResult = infCount + eqCount;
    }
    if (tempResult > result) {
      result = tempResult;
    }
  }

  return result + 1;
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));

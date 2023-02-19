function getTotalX(a, b) {
  // Write your code here
  let factorsOfA = [];
  const maxOfB = b.reduce((prev, curr) => {
    return curr > prev ? curr : prev;
  }, 0);
  for (let i = 1; i <= maxOfB; i++) {
    let isAllFactorsOfA = true;
    let j = 0;
    for (j; j < a.length; j++) {
      if (isAllFactorsOfA) {
        if (i % a[j] === 0) {
          continue;
        } else {
          isAllFactorsOfA = false;
        }
      } else {
        break;
      }
    }
    if (isAllFactorsOfA) {
      factorsOfA.push(i);
    }
  }

  let factorsOfBCount = 0;
  for (let i = 0; i < factorsOfA.length; i++) {
    let isAllFactorsOfB = true;
    let j = 0;
    for (j; j < b.length; j++) {
      if (isAllFactorsOfB) {
        if (b[j] % factorsOfA[i] === 0) {
          continue;
        } else {
          isAllFactorsOfB = false;
        }
      } else {
        break;
      }
    }
    if (isAllFactorsOfB && j > 0) {
      factorsOfBCount++;
    }
  }

  return factorsOfBCount;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
console.log(getTotalX([2, 6], [24, 36]));
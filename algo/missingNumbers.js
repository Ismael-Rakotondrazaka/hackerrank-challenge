missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]);
missingNumbers(
  [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
  [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
);

function missingNumbers(arr, brr) {
  // Write your code here

  let occurrencesA = {};
//   let occurrencesB = {};

  arr.forEach((elem) => {
    occurrencesA[elem] = Object.hasOwnProperty.call(occurrencesA, elem)
      ? occurrencesA[elem] + 1
      : 1;
  });

/*   brr.forEach((elem) => {
    occurrencesB[elem] = Object.hasOwnProperty.call(occurrencesB, elem)
      ? occurrencesB[elem] + 1
      : 1;
  }); */

  let missingNumbers = [];

  brr.map((elem) => {
    if (!Object.hasOwnProperty.call(occurrencesA, elem)) {
      if (!missingNumbers.includes(elem)) {
        missingNumbers.push(elem);
      }
    } else {
      if (occurrencesA[elem] > 0) {
        occurrencesA[elem]--;
      } else {
        if (!missingNumbers.includes(elem)) {
          missingNumbers.push(elem);
        }
      }
    }
  });

  console.log(occurrencesA);
//   console.log(occurrencesB);

  console.log(missingNumbers);
}

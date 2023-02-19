serviceLane(
  8,
  [2, 3, 1, 2, 3, 2, 3, 3],
  [
    [0, 3],
    [4, 6],
    [6, 7],
    [3, 5],
    [0, 7],
  ]
);

function serviceLane(n, width, cases) {
  // Write your code here
  let result = [];
  for (let i = 0; i < cases.length; i++) {
    const element = cases[i];
    let minimum = 0;
    for (let j = element[0]; j <= element[1]; j++) {
      let part = width[j];
      if (minimum === 0 || part < minimum) {
        minimum = part;
      }
    }
    result.push(minimum);
  }
  console.log(result);
}

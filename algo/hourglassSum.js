function hourglassSum(arr = [[0]]) {
  // Write your code here
  function getSum(i, j, arr) {
    const xi = [-1, -1, -1, 0, 1, 1, 1];
    const yi = [-1, 0, 1, 0, -1, 0, 1];

    let result = 0;

    for (let index = 0; index < 7; index++) {
      result += arr[i + xi[index]][j + yi[index]];
    }

    return result;
  }

  let max = -Infinity;

  let n = 0;
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      const val = getSum(i, j, arr);
      max = Math.max(max, val);
      n++;
    }
  }

  console.log({ max });
}

hourglassSum(
  `-9 -9 -9 1 1 1
0 -9 0 4 3 2
-9 -9 -9 1 2 3
0 0 8 6 6 0
0 0 0 -2 0 0
0 0 1 2 4 0`
    .split("\n")
    .map((val1) => val1.split(" ").map((val2) => +val2))
);

diagonalDifference(3, [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);

function diagonalDifference(n, arr) {
  // Write your code here
  let diag_1 = 0;
  let diag_2 = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length && j >= 0; i++, j--) {
    // const element = arr[i];
    console.log("i", i, "j", j);
    console.log("val", arr[i][i], arr[i][j]);
    diag_1 += arr[i][i];
    diag_2 += arr[i][j];
  }

  console.log(diag_1, diag_2);
  let result = Math.abs(diag_1 - diag_2);
  console.log("result", result);
}

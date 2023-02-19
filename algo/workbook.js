workbook(2, 3, [4, 2]);
workbook(5, 3, [4, 2, 6, 1, 10]);
function workbook(n, k, arr) {
  // Write your code here
  let actualPage = 1;
  let specialCount = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      if (actualPage === j) {
        specialCount++;
      }
      console.log("actualPage", actualPage, "j", j);
      if (j % k === 0 || j === arr[i]) {
        actualPage++;
      }
    }
    // this one is useful if we need to know the number of page required
    if (i === arr.length - 1) {
      actualPage--;
    }
  }

  console.log(specialCount);
}

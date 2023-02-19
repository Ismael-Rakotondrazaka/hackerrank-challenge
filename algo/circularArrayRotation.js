circularArrayRotation([3, 4, 5], 2, [1, 2]);
circularArrayRotation([1, 2, 3], 2, [0, 1, 2]);
function circularArrayRotation(a, k, queries) {
  // Write your code here
  const length = a.length;
  let actualPosition;
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    const element = queries[i];
    let j = 0;
    while (true) {
      let tempPosition = element + j * length - k;
      console.log("tempPosition", tempPosition);
      if (tempPosition >= 0 && tempPosition < length) {
        actualPosition = tempPosition;
        break;
      }
      j++;
    }
    result.push(a[actualPosition]);
  }
  console.log(result);
}

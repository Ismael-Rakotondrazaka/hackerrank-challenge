fibonacciModified(0, 1, 6);

function fibonacciModified(t1, t2, n) {
  // Write your code here
  t1 = BigInt(t1);
  t2 = BigInt(t2);
  let resultOld = t2;
  let result = t1 + t2 * t2;
  //   console.log("pow", Math.pow(t2, 2));
  for (let i = 4; i <= n; i++) {
    const temp = resultOld;
    resultOld = result;
    result = temp + result * result;
    // console.log(temp, result);
  }
  console.log(result);
}

// stones(2, 2, 3);
// stones(3, 1, 2);
// stones(5, 10, 100);
// stones(27, 10, 3);
stones(2, 2, 2);
stones(100, 1, 1);
stones(999, 2, 2);

function stones(n, a, b) {
  // Write your code here
  let arr;
  //   console.log("array initial", arr);

  let result = [];

  if (n <= 2) {
    result.push(a * n);
    arr = new Array(n).fill(a);
    console.log("initial arr", arr);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = b;
      result.push(arr.reduce((prev, curr) => prev + curr, 0));
      //   console.log("array now", arr, i);
    }
  } else {
    arr = new Array(n - 1).fill(a);
    // console.log(a, n - 1, a * (n - 1));
    result.push(a * (n - 1));
    for (let i = 0; i < arr.length; i++) {
      arr[i] = b;
      result.push(arr.reduce((prev, curr) => prev + curr, 0));
      //   console.log("array now", arr, i);
    }
  }

  console.log("result", result);
  //   const res = resolve(n, a, b, 1, 0, new Set());
  //   console.log(res);
}

var result = [];

function resolve(n, a, b, step, sum, arr) {
  console.log(step, sum);
  //   console.log(arr);
  if (step < n) {
    resolve(n, a, b, step + 1, sum + a, arr);
    resolve(n, a, b, step + 1, sum + b, arr);
  } else {
    arr.add(sum);
  }
  return arr;
}

/* function stones(n, a, b) {
    // Write your code here
    const res = resolve(n, a, b, 1, 0, new Set());
    console.log(res);
  }
  
  var result = [];
  
  function resolve(n, a, b, step, sum, arr) {
    console.log(step, sum);
  //   console.log(arr);
    if (step < n) {
      resolve(n, a, b, step + 1, sum + a, arr);
      resolve(n, a, b, step + 1, sum + b, arr);
    } else {
      arr.add(sum);
    }
    return arr;
  } */

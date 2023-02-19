balancedSumsOptimal([5, 6, 8, 11]);

function balancedSumsOptimal(arr) {
  // Write your code here
  let result = "NO";

  let allSum = arr.reduce((prev, curr) => prev + curr, 0);

  let previous = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(previous, allSum - previous - element);
    if (previous === allSum - previous - element) {
      result = "YES";
      break;
    }
    previous = previous + element;
  }
  return result;
}

function balancedSums(arr) {
  // Write your code here
  let result = "NO";
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let leftSum = getSum(arr, 0, i);
    let rightSum = getSum(arr, i + 1, arr.length);
    console.log(leftSum, rightSum);
    if (leftSum === rightSum) {
      result = "YES";
      break;
    }
  }
  console.log(result);
  return result;
}

function getSum(arr, start, end) {
  let sum = 0;
  while (start < end) {
    sum += arr[start];
    start++;
  }
  return sum;
}

jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]);
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
jumpingOnClouds([0, 0, 0, 0, 1, 0]);

function jumpingOnClouds(c) {
  // Write your code here

  let possibilities = resolve(c, 0, 0, new Set(), 0);
  console.log("possibilities", possibilities);
  const result = [...possibilities].sort((a, b) => a - b)[0];
  console.log(result);
}

function resolve(arr, i, step, result, prev) {
  console.log("index", i, "value", arr[i], "step", step, "prev", prev);
  if (i !== arr.length - 1) {
    if (arr[i] === 0) {
      i++;
      resolve(arr, i, step + 1, result, i - 1);
      i++;
      resolve(arr, i, step + 1, result, i - 2);
    }
  } else if (i === arr.length - 1) {
    result.add(step);
  }
  return result;
}

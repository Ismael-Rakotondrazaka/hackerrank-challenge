function rotateLeft(d = 0, arr = [0]) {
  const right = arr.splice(0, d % arr.length);
  let result = arr.concat(right);
  console.log({ result });
  return result;
}

rotateLeft(4, [1, 2, 3, 4, 5]);

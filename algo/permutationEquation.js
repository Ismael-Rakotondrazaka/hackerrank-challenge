function permutationEquation(p) {
  // Write your code here

  let result = p.map((value, i, arr) => {
    return arr.indexOf(arr.indexOf(i + 1) + 1) + 1;
  });
  return result;
}

console.log(permutationEquation([5, 2, 1, 3, 4]));

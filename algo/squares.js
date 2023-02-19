function squares(a, b) {
  // Write your code here
  let result = 0;
  let min = Math.ceil(Math.sqrt(a));
  let max = Math.ceil(Math.sqrt(b));
  let minPow = Math.pow(min, 2);
  let maxPow = Math.pow(max, 2);
  console.log(min, max);
  for (let i = min; i <= max; i++) {
    // const element = max[i];
    const pow = Math.pow(i, 2);
    console.log(pow, minPow, maxPow, pow >= minPow && pow <= maxPow);
    if (pow >= a && pow <= b) {
        console.log("t");
      result++;
    }
  }
  return result;
}

console.log(squares(3, 9));
console.log(squares(17, 24));

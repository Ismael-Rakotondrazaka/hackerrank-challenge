squares(24, 49);
squares(3, 9);
squares(17, 24);
squares(100, 1000);

function squares(a, b) {
  // Write your code here
  let minA = Math.floor(Math.sqrt(a));
  minA = Math.pow(minA, 2) >= a ? minA : minA + 1;

  let minB = Math.floor(Math.sqrt(b));
  minB = Math.pow(minB, 2) <= b ? minB : minB + 1;

  console.log("min", minA, minB);
  let diff = minB - minA + 1;
  console.log("ddiff", diff);
}

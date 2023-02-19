/* function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesCount = 0;
  const appMin = s - a;
  const appMax = t - a;

  for (let i = 0; i < apples.length; i++) {
    if (apples[i] > 0) {
      if (apples[i] + a >= appMin && apples[i] + a <= appMax) {
        applesCount++;
      }
    }
  }
  console.log(applesCount);
  let orangeCount = 0;
  const oraMin = b - t;
  const oraMax = b - s;
  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] < 0) {
      if (oranges[i] * -1 >= oraMin && oranges[i] * -1 <= oraMax) {
        orangeCount++;
      }
    }
  }
  console.log(orangeCount);
} */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesCount = 0;
  //   const appMin = s - a;
  //   const appMax = t - a;

  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      applesCount++;
    }
  }
  console.log(applesCount);
  let orangeCount = 0;

  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] + b >= s && oranges[i] + b <= t) {
      orangeCount++;
    }
  }
  console.log(orangeCount);
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);

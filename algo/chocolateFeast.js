chocolateFeast(10, 2, 5);
chocolateFeast(12, 4, 4);
chocolateFeast(6, 2, 2);

function chocolateFeast(n, c, m) {
  // Write your code here
  let wrappers = 0;
  let chocolateEaten = Math.floor(n / c);
  wrappers += chocolateEaten;
  let moneyLeftOvers = n % c;
  do {
    if (wrappers >= m) {
      wrappers -= m;
      chocolateEaten += 1;
      wrappers++;
    }
  } while (wrappers >= m);

  console.log("result", chocolateEaten);
}

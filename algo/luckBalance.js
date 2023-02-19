function luckBalance(k = 0, contests = [[0, 0]]) {
  let n = contests.length;
  let total = 0;

  let importantCosts = [];
  let importantCount = 0;

  for (let i = 0; i < n; i++) {
    const el = contests[i];
    if (el[1] === 1) {
      importantCosts.push(el[0]);
      importantCount++;
    }
    total += el[0];
  }

  importantCosts.sort((a, b) => a - b);

  if (importantCount > k) {
    let diff = importantCount - k;

    for (let i = 0; i < diff; i++) {
      total -= importantCosts[i] * 2;
    }
  }

  console.log({ total });
}

luckBalance(3, [
  [5, 1],
  [2, 1],
  [1, 1],
  [8, 1],
  [10, 0],
  [5, 0],
]);

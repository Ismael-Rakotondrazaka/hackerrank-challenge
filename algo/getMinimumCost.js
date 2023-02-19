getMinimumCost(3, [1, 2, 3, 4]);
getMinimumCost(3, [2, 5, 6]);
getMinimumCost(2, [2, 5, 6]);

function getMinimumCost(k, c) {
  const nbrFlowers = c.length;

  c.sort((a, b) => a - b);
  let totalCost = 0;
  let flowerPerFriend = 0;
  let buyCount = 0;
  for (let i = c.length - 1; i >= 0; i--) {
    const element = c[i];
    // console.log(element);
    if (buyCount === k) {
      flowerPerFriend++;
      buyCount = 0;
    }
    totalCost += (flowerPerFriend + 1) * element;
    console.log(flowerPerFriend, totalCost);
    buyCount++;
  }
  console.log(totalCost);
}

howManyGames(20, 3, 6, 70);
// howManyGames(89, 91, 26, 840);
howManyGames(73, 72, 44, 75);
// howManyGames(73, 72, 44, 9163);

function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let lastPrice = p;
  let totalPrice = p;
  let totalGames = 0;
  let newPrice = p - d;
  while (totalPrice <= s && newPrice > 0) {
    console.log("lastPrice", lastPrice);
    console.log("totalPrice", totalPrice);
    console.log("totalGames", totalGames);
    newPrice = lastPrice - d;
    console.log("newPrice", newPrice, "\n\n");
    let newTotalPrice = totalPrice + newPrice;
    if (newPrice > 0) {
      if (newTotalPrice > m && newPrice > 0) {
        lastPrice = newPrice;
        totalPrice = newTotalPrice;
        totalGames++;
      } else if (newPrice > 0) {
        totalGames++;
        totalPrice += m;
      }
    } else {
      totalGames++;
      totalPrice += m;
    }

    // console.log("lastPrice", lastPrice);
    // console.log("totalPrice", totalPrice);
    // console.log("totalGames", totalGames);
  }
  console.log(totalPrice);
  console.log(totalGames);
}

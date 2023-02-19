counterGame(132);
counterGame(6);

counterGame(1560834904);
counterGame(1768820483);
counterGame(1533726144);
counterGame(1620434450);
counterGame(1463674015);

function counterGame(n) {
  // Write your code here
  let initialN = n;
  let turn = n === 1 ? 1 : 0;
  while (n > 1) {
    // console.log("before", n, turn);
    let powLow = powLow2(n);
    // console.log("pow, low", powLow);
    n = n === powLow ? n / 2 : n - powLow;
    if (n !== 1) {
      turn = turn === 1 ? 0 : 1;
    }
    if (n <= 1) {
    //   console.log("after", n, turn);
    }
  }
  //   if (initialN !== 1) {
  //     n === 0 ? 1 : 0;
  //   }
  console.log(turn === 0 ? "Luise" : "Richard");
}

function powLow2(n) {
  let result = 0;
  let i = 1;
  while (true) {
    const tempResult = Math.pow(2, i);
    if (tempResult > n) {
      break;
    }
    result = tempResult;
    i++;
  }
  //   console.log("low");
  return result;
}

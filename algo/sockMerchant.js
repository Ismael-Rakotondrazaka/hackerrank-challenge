function sockMerchant(n, ar) {
  // Write your code here
  let socksIds = [...new Set(ar)];
  let socksCounts = new Array(socksIds.length);
  socksCounts.fill(0);
  socksIds.forEach((value, i, arr) => {
    for (let j = 0; j < ar.length; j++) {
      //   console.log(ar[j], value, ar[j] === value);
      if (ar[j] === value) {
        // console.log(socksCounts[i]);
        socksCounts[i] = socksCounts[i] + 1;
        // console.log(socksCounts[i]);
      }
    }
  });
  console.log(socksIds);
  console.log(socksCounts);

  let pairs = 0;
  //   let rest = 0;
  for (let i = 0; i < socksCounts.length; i++) {
    //   const div = socksCounts[i] // 2
    // if (socksCounts[i] % 2 === 0) {
    //   pairs++;
    // }
    pairs += Math.floor(socksCounts[i] / 2);
    // rest += socksCounts[i] % 2;
  }
  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));

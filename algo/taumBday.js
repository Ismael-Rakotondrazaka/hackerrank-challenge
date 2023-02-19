taumBday(3, 6, 9, 1, 1);
taumBday(3, 3, 1, 9, 2);
taumBday(2, 3, 4, 3, 6);

function taumBday(b, w, bc, wc, z) {
  // Write your code here
  /*   let onlyBCost = BigInt(b * bc);
  let onlyWCost = BigInt(w * wc);
  let allB = onlyBCost + (w * BigInt(bc + z));
  let allW = onlyWCost + (b * BigInt(wc + z));
  let eachCost = BigInt(w * wc) + BigInt(b * bc); */

  let onlyBCost = BigInt(b) * BigInt(bc);
  let onlyWCost = BigInt(w) * BigInt(wc);
  let allB = onlyBCost + (BigInt(w) * BigInt(bc) + BigInt(z));
  let allW = onlyWCost + (BigInt(b) * BigInt(wc) + BigInt(z));
  let eachCost = BigInt(w) * BigInt(wc) + BigInt(b) * BigInt(bc);


//   let onlyBCost = BigInt(b) * BigInt(bc);
//   let onlyWCost = BigInt(w) * BigInt(wc);
//   let allB = onlyBCost + BigInt(w) * (BigInt(bc) + BigInt(z));
//   let allW = onlyWCost + BigInt(b) * (BigInt(wc) + BigInt(z));
//   let eachCost = BigInt(w) * BigInt(wc) + BigInt(b) * BigInt(bc);

  /* 
    let onlyBCost = b * bc;
  let onlyWCost = w * wc;
  let allB = onlyBCost + w * (bc + z);
  let allW = onlyWCost + b * (wc + z);
  let eachCost = w * wc + b * bc;
  */

  console.log(onlyBCost);
  console.log(onlyWCost);
  console.log(allB);
  console.log(allW);
  console.log(eachCost);

  let result =
    allW > allB
      ? allB > eachCost
        ? eachCost
        : allB
      : allW > eachCost
      ? eachCost
      : allW;

  console.log("result", result);
}

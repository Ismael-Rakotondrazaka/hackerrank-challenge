fairRations([2, 3, 4, 5, 6]);
fairRations([1, 2]);

function fairRations(B) {
  // Write your code here
  let breadShared = 0;
  let impossible = false;
  for (let i = 0; i < B.length - 1; i++) {
    const element = B[i];
    if (element % 2 === 1) {
      B[i]++;
      B[i + 1]++;
      breadShared += 2;
    }
    if (i === B.length - 2 && B[B.length - 1] % 2 === 1) {
      impossible = true;
    }
  }

  console.log(impossible ? "NO" : breadShared.toString());
  return impossible ? "NO" : breadShared.toString();
}

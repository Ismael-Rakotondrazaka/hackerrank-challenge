function beautifulBinaryString(b = "") {
  const n = b.length;
  let result = 0;
  b = b.split("");

  const last = [];

  for (let i = 0; i < n; i++) {
    if (b[i] === "0" && b[i - 1] === "1" && b[i - 2] === "0") {
      b[i] = "1";
      result++;
      last.push(i);
    }
  }

  console.log({ result }, { last });
  return result;
}

beautifulBinaryString("0100101010");

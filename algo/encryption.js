function encryption(s) {
  // Write your code here
  let length = s.length;
  let lenMin = Math.floor(Math.sqrt(length));
  let lenMax = Math.ceil(Math.sqrt(length));
  const cells = lenMin * lenMax;
//   console.log(lenMin, lenMax, cells);
  let giantArr = [];

  let iStart = 0;
  let iEnd = lenMax;
  let absorb = s.slice(0, lenMax);
//   console.log("absorb", absorb);
  while (iEnd !== cells + lenMax) {
    // console.log(iStart, iEnd);
    giantArr.push(s.slice(iStart, iEnd));
    // console.log(s);
    iStart = iEnd;
    iEnd += lenMax;
  }
//   console.log(giantArr);

  let container = [];

  for (let i = 0; i < lenMax; i++) {
    let elem = "";
    for (let j = 0; j < lenMin; j++) {
      elem = elem + (giantArr[j][i] || "");
    }
    container.push(elem);
  }
  console.log(container.join(" "));
}

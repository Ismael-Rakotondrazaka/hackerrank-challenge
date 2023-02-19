function theLoveLetterMystery(s = "") {
  const n = s.length;

  let left = s.split("");

  let right;
  const mod = n % 2;
  if (mod === 0) {
    right = left.splice(n / 2);
  } else {
    right = left.splice(Math.ceil(n / 2));
    left.pop();
  }

  const m = right.length;

  let result = 0;

  for (let i = 0; i < m; i++) {
    result += Math.abs(
      left[i].charCodeAt(0) - right[m - (i + 1)].charCodeAt(0)
    );
  }

  console.log(left, right);
  console.log(result);
}

// theLoveLetterMystery("abcba");
theLoveLetterMystery("abcd");
// theLoveLetterMystery("abc");

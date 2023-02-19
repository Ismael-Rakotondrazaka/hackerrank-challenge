function funnyString(s = "") {
  let r = [...s].reverse().join("");
  const length = s.length;
  let result = "Funny";

  for (let i = 1; i < length; i++) {
    if (
      Math.abs(r[i - 1].charCodeAt(0) - r[i].charCodeAt(0)) !==
      Math.abs(s[i - 1].charCodeAt(0) - s[i].charCodeAt(0))
    ) {
      result = "Not Funny";
      break;
    }
  }

  return result;
}

funnyString("acxz");

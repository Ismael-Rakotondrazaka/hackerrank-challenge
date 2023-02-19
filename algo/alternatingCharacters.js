function alternatingCharacters(s = "") {
  const length = s.length;
  let result = 0;

  if (length > 1) {
    let count = 0;

    for (let i = 1; i < length; i++) {
      if (s[i - 1] === s[i]) {
        count++;
      } else {
        result += count;
        count = 0;
      }
    }

    result += count;
  }

  return result;
}

alternatingCharacters("AAABBB");

function kangaroo(x1, v1, x2, v2) {
  // if (x1 === x2) return "YES";
  const prevdist = Math.abs(x1 - x2);
  console.log(prevdist);
  let i = 1;
  let result = "NO";
  let approach = false;
  do {
    const posK1 = x1 + v1 * i;
    const posK2 = x2 + v2 * i;
    const currDist = Math.abs(posK1 - posK2);
    console.log(currDist);
    if (currDist > prevdist) {
      break;
    } else if (currDist === prevdist) {
      if (Math.abs(x1 + v1 * (i + 1) - (x2 + v2 * (i + 1))) === prevdist) {
        result = "NO";
      } else {
        result = "YES";
      }
      break;
    }
    i++;
  } while (true);
  return result;
}

// console.log(kangaroo(0, 3, 4, 2));
// console.log(kangaroo(0, 0, 4, 0));
console.log(kangaroo(43, 2, 70, 2));

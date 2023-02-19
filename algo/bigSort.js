// 10 / 12 test case

function bigSort(arr = []) {
  return arr
    .map((val, i) => ({
      value: +val,
      index: i,
    }))
    .sort((a, b) => a.value - b.value)
    .map((val) => arr[val.index]);
}

console.log(
  bigSort("6 31415926535897932384626433832795 1 3 10 3 5".split(" "))
);

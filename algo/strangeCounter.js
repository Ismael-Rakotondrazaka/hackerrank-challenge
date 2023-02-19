function strangeCounter(t) {
  // Write your code here
  let index = 3;
  let counter = 0;
  let value = 3;
  let lastValue = 1;

  while (index < t) {
    console.log("init", value, index);

    value *= 2;
    index += value;
    console.log("term", value, index);
  } ;

  const diff = Math.abs(index - t) + 1;

  return diff;
}

console.log(strangeCounter(22));

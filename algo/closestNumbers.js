function closestNumbers(arr) {
  // Write your code here
  let result = 0;
  arr.sort((a, b) => b - a);

  const diffObj = {};

  for (let i = 0; i < arr.length - 1; i++) {
    const key = arr[i + 1] - arr[i];
    if (Object.hasOwnProperty.call(diffObj, key)) {
      diffObj[key].push([i, i + 1]);
    } else {
      diffObj[key] = [[i, i + 1]];
    }
  }

  //   console.log(diffObj);

  let pairs = [];

  for (const key in diffObj) {
    if (Object.hasOwnProperty.call(diffObj, key)) {
      const element = diffObj[key];
      pairs.push({
        diff: +key,
        index: element.reduce((prev, curr) => {
          return [...prev, ...curr];
        }, []),
      });
    }
  }

  pairs.sort((a, b) => b.diff - a.diff);

  result = pairs[0].index.map((val) => arr[val]).sort((a, b) => a - b);

  console.log(result);
  return result;
}

closestNumbers(
  "-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854"
    .split(" ")
    .map((val) => +val)
);

closestNumbers([5, 2, 3, 4, 1]);

closestNumbers(
  "-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 -520 -470"
    .split(" ")
    .map((val) => +val)
);

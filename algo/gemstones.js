// gemstones(["abc", "abc", "ab"]);
gemstones(["abcdde", "baccd", "eeabg"]);

function gemstones(arr) {
  // Write your code here
  let occurrences = {};

  for (let i = 0; i < arr.length; i++) {
    const element = [...new Set(arr[i].split(""))];
    console.log(element);
    for (let j = 0; j < element.length; j++) {
      const element2 = element[j];
      occurrences[element2] = Object.hasOwnProperty.call(occurrences, element2)
        ? occurrences[element2] + 1
        : 1;
    }
  }

  console.log(occurrences);
  let result = 0;
  let length = arr.length;
  for (const key in occurrences) {
    if (Object.hasOwnProperty.call(occurrences, key)) {
      const element = occurrences[key];
      if (element === length) {
        result++;
      }
    }
  }

  console.log(result);
}

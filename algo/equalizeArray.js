equalizeArray([3, 3, 2, 1, 3]);
equalizeArray([1, 2, 2, 3]);
function equalizeArray(arr) {
  // Write your code here
  let occurrences = {};

  arr.forEach((element) => {
    if (Object.hasOwnProperty.call(occurrences, element)) {
      occurrences[element]++;
    } else {
      occurrences[element] = 1;
    }
  });

  let maxOccurrences = 0;

  for (const key in occurrences) {
    if (Object.hasOwnProperty.call(occurrences, key)) {
      const element = occurrences[key];
      if (element > maxOccurrences) {
        maxOccurrences = element;
      }
    }
  }

  let result = arr.length - maxOccurrences;
  console.log(result);
}

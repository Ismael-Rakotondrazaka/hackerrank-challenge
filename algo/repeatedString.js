repeatedString("aba", 10);

function repeatedString(s, n) {
  // Write your code here
  s = s.split("");
  const length = s.length;
  let occurrencesForSingle = s.reduce(
    (prev, curr) => (curr === "a" ? ++prev : prev),
    0
  );
  console.log("occurrencesForSingle", occurrencesForSingle);
  let minimumRepeat = Math.floor(n / length);
  console.log("minimumRepeat", minimumRepeat);
  let occurrences = occurrencesForSingle * minimumRepeat;
  console.log("occurrences", occurrences);
  let leftOvers = n - minimumRepeat * length;
  console.log("leftOvers", leftOvers);
  let leftOccurrences = s
    .slice(0, leftOvers)
    .reduce((prev, curr) => (curr === "a" ? ++prev : prev), 0);
  let result = occurrences + leftOccurrences;
  console.log(result);
}

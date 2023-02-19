hackerrankInString("haacckkerrannkk");
hackerrankInString("haacckkerannkk")
hackerrankInString("hackerworld")
hackerrankInString("hereiamstackerrank")
function hackerrankInString(s) {
  // Write your code here
  let originalString = ["h", "a", "c", "k", "e", "r", "r", "a", "n", "k"];

  let lastIndex = 0;
  let notFound = false;

  for (let i = 0; i < originalString.length; i++) {
    const element = originalString[i];
    let foundIndex = s.indexOf(element, i === 0 ? lastIndex : lastIndex + 1);
    console.log(lastIndex, foundIndex);
    if (foundIndex !== -1) {
      lastIndex = foundIndex;
    } else {
      notFound = true;
      break;
    }
  }
  let result = notFound ? "NO" : "YES";
  console.log("result", result);
}

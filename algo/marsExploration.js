marsExploration("SOSSPSSQSSOR");

function marsExploration(s) {
  // Write your code here
  let result = 0;

  for (let i = 1; i <= s.length; i++) {
    const element = s[i - 1];
    let modulo = i % 3;
    console.log(modulo);
    switch (modulo) {
      case 2:
        console.log(element, "O");
        if (element !== "O") {
          result++;
        }
        break;

      default:
        console.log(element, "S");
        if (element !== "S") {
          result++;
        }
        break;
    }
  }
  console.log("result", result);
}

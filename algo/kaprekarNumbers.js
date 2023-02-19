kaprekarNumbers(1, 5);

function kaprekarNumbers(p, q) {
  // Write your code here
  let result = [];
  let hasKaprekarNumbers = false;

  for (let i = p; i <= q; i++) {
    // console.log("i", i);
    let length = i.toString().length;
    console.log("length", length);

    let squared = Math.pow(i, 2);
    console.log("squared", squared);

    let squaredLength = squared.toString().length;

    let left = squared.toString().split("");
    console.log("before", left);
    let right = left.splice(squaredLength - length /* squaredLength + 1 */);
    console.log("left", left, "right", right);
    // left.length > 0 ? parseInt(left.join("")) :
    let sum = (parseInt(left.join("")) || 0) + (parseInt(right.join("")) || 0);
    console.log("sum", sum);
    if (sum === i) {
      console.log(i);
      hasKaprekarNumbers = true;
    }
  }

  if (!hasKaprekarNumbers) {
    console.log("INVALID RANGE");
  }
}

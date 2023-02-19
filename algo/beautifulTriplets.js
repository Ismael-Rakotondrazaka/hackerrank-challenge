beautifulTriplets(1, [2, 2, 3, 4, 5]);
beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]);

function beautifulTriplets(d, arr) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    let beautiful = 0;
    console.log("to complement", arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
        console.log("candidate", arr[j]);
        // console.log("retain", );
      if (beautiful === 0 && arr[j] === arr[i] + d) {
        beautiful = 1;
      } else if (beautiful === 1 && arr[j] === arr[i] + 2 * d) {
        beautiful = 2;
      } else if (beautiful === 2) {
        break;
      }
    }
    if (beautiful === 2) {
      result++;
    }
  }
  console.log("result", result);
}

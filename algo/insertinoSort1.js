function insertionSort1(n, arr) {
  // Write your code here
  let index = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let temp = arr[i];
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] > temp) {
          arr[j + 1] = arr[j];
          console.log(arr.join(" "));
        } else {
          //   arr[j + 1] = arr[j];
          arr[j + 1] = temp;
          console.log(arr.join(" "));
          break;
        }
        if (j === 0) {
          arr[j] = temp;
          console.log(arr.join(" "));
        }
      }
    }
  }
}

insertionSort1(5, [2, 4, 6, 8, 3]);
// insertionSort1(5, [1, 1, 2, 0]);

minimumDistances([7, 1, 3, 4, 1, 7]);
minimumDistances([3, 1, 2, 1, 3]);

function minimumDistances(a) {
  // Write your code here
  let data = [];
  let maxDistance = -1;
  let pairs = [];
  let indexes = [];

  for (let i = 0; i < a.length - 1; i++) {
    const element = a[i];
    for (let j = i + 1; j < a.length; j++) {
      const element = a[j];
      // console.log(i, j);
      // if (Object.prototype.hasOwnProperty.call(data, )) {

      // }

      if (
        a[i] === a[j] &&
        (Math.abs(i - j) < maxDistance || maxDistance === -1)
      ) {
        maxDistance = Math.abs(i - j);
        data.push(Math.abs(i - j));
        pairs.push(a[i]);
        indexes.push([i, j]);
      }
    }
  }

  console.log(data);
  console.log(maxDistance);
  console.log(pairs);
  console.log(indexes);
}

function candies(n = 0, arr = [0]) {
  let result = new Array(n).fill(1);

  let scoreIds = new Set();
  let adj = new Map();

  arr.forEach((elem, i) => {
    scoreIds.add(elem);

    if (adj.has(elem)) {
      adj.get(elem).push(i);
    } else {
      adj.set(elem, [i]);
    }
  });

  scoreIds = [...scoreIds].sort((a, b) => a - b);

  scoreIds.forEach((elem) => {
    adj.get(elem).forEach((index) => {
      if (index > 0 && elem > arr[index - 1]) {
        result[index] = Math.max(result[index], result[index - 1] + 1);
      }

      if (index < n - 1 && elem > arr[index + 1]) {
        result[index] = Math.max(result[index], result[index + 1] + 1);
      }
    });
  });

  console.log({ result });
  let res = result.reduce((prev, curr) => prev + curr, 0);

  console.log({ res });
  return res;
}

candies(6, [4, 6, 4, 5, 6, 2]);
candies(3, [1, 2, 2]);
candies(8, [2, 4, 3, 5, 2, 6, 4, 5]);
candies(4, [1, 3, 7, 1]);
candies(7, [1, 2, 3, 2, 1, 2, 1]);

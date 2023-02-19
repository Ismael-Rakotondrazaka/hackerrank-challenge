function organizingContainers(container) {
  // Write your code here
  const length = container.length;
  let ballCounts = new Array(length);
  ballCounts.fill(0);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      ballCounts[i] += container[j][i];
    }
  }

  let containersBall = new Array(length);
  containersBall.fill(0);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      containersBall[i] += container[i][j];
    }
  }

  let result = 0;
  ballCounts.sort();
  containersBall.sort();
  //   console.log(ballCounts.sort(), containersBall.sort());
  for (let i = 0; i < ballCounts.length; i++) {
    if (ballCounts[i] === containersBall[i]) {
      result++;
    } else {
      break;
    }
  }
  console.log((result = ballCounts.length ? "Possible" : "Impossible"));

  //   console.log(result);
}

/* organizingContainers([
  [1, 4],
  [2, 3],
]);
organizingContainers([
  [1, 3, 1],
  [2, 1, 2],
  [3, 3, 3],
]);
organizingContainers([
  [1, 1],
  [1, 1],
]); */
organizingContainers([
  [0, 2, 1],
  [1, 1, 1],
  [2, 0, 0],
]);

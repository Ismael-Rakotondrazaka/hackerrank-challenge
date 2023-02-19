function connectedCell(matrix, n, m) {
  // Write your code here
  let max = 0;

  function findMaxRegion(i, j, matrix, count) {
    // if the cell is not a filled cell (i), we return the count
    if (matrix[i][j] !== 1) {
      return count;
    }

    count += 1; // add the current cell as a part of the region
    matrix[i][j] = -1; // and we mark as visited

    // (xi, yi) is the adjacent position to be compared with the current cell (i, j)
    const xi = [-1, -1, -1, 0, 0, 1, 1, 1];
    const yi = [-1, 0, 1, -1, 0, -1, 0, 1];

    // we compare the adjacent cell and the current one
    for (let x = 0; x < xi.length; x++) {
      const refX = xi[x];
      for (let y = 0; y < yi.length; y++) {
        const refY = yi[y];

        const nextX = i + refX;
        const nextY = j + refY;

        // check if the next cell to be checked is inside the matrix
        if (0 <= nextX && nextX < n && 0 <= nextY && nextY < m) {
          count = Math.max(count, findMaxRegion(nextX, nextY, matrix, count));
        }
      }
    }

    return count;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      max = Math.max(max, findMaxRegion(i, j, matrix, 0));
      //   console.log({ max });
    }
  }

  console.log(max);
}

connectedCell(
  [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 0],
  ],
  4,
  4
);

connectedCell(
  [
    [1, 1, 0],
    [1, 0, 0],
    [0, 0, 1],
  ],
  3,
  3
);

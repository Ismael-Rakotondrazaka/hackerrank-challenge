cavityMap(3, ["989", "191", "111"]);
cavityMap(3, ["1112", "1912", "1892", "1234"]);
function cavityMap(n, grid) {
  // Write your code here

  let result = new Array();
  result = grid.map((value) =>
    value.split("").map((value) => parseInt(value, 10))
  );

  if (n > 2) {
    grid = grid.map((value) =>
      value.split("").map((value) => parseInt(value, 10))
    );

    result = result.concat(grid);

    // result.push([45])
    console.log("grid", result);

    for (let i = 1; i < grid.length - 1; i++) {
      //   const element = grid[i];
      for (let j = 1; j < grid[i].length - 1; j++) {
        // const grid[i][j] = grid[i][j];
        let isAllSmaller = true;
        console.log(
          //   grid[i][j],
          "edges",
          grid[i - 1][j],
          grid[i][j - 1],
          grid[i][j + 1],
          grid[i + 1][j]
        );
        if (
          grid[i - 1][j] >= grid[i][j] ||
          grid[i][j - 1] >= grid[i][j] ||
          grid[i][j + 1] >= grid[i][j] ||
          grid[i + 1][j] >= grid[i][j]
        ) {
          isAllSmaller = false;
        }
        if (isAllSmaller) {
          console.log(result[i]);
          result[i][j] = "X";
        }
      }
    }
  }
  result = result.map((value) => value.join(""));
  console.log(result);
}

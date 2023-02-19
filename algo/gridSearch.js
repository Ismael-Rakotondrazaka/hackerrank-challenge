// we try to get the pattern
function findIndexColPatternTopLeft(gridLine, patternLine, fromStart) {
  let result = -1;
  let isAllEqual = false;
  let results = [];
  for (let i = fromStart; i < gridLine.length - patternLine.length + 1; i++) {
    isAllEqual = true;
    for (let j = 0; j < patternLine.length; j++) {
      if (gridLine[i + j] !== patternLine[j]) {
        isAllEqual = false;
        break;
      }
      if (j === patternLine.length - 1 && isAllEqual) {
        result = i;
        results.push(i);
      }
    }
  }

  return results;
}

function findIndexRowPatternTopLeft(
  grid,
  patternLine,
  patternLength,
  fromStart,
  indexEnd,
  fromStartCol
) {
  let indexRow = -1;
  let indexCol = -1;
  let results = [];
  for (
    let i = fromStart;
    i < grid.length - patternLength + 1, i < indexEnd;
    i++
  ) {
    indexCol = findIndexColPatternTopLeft(grid[i], patternLine, fromStartCol);
    if (indexCol.length > 0) {
      let toPush = [i, indexCol];
      results.push(toPush);
    }
  }

  return results;
}

function resolve(G, P, posFirstPatternRow, posFirstPatternCol) {
  let nextPatternExist = true;

  for (let i = 1, j = posFirstPatternRow + 1; i < P.length; i++, j++) {
    let singlePattern = findIndexRowPatternTopLeft(
      G,
      P[i],
      P.length,
      j,
      j + 1,
      posFirstPatternCol
    );

    // console.log("singlePattern", singlePattern);

    if (
      singlePattern.length === 0 ||
      singlePattern[0][1][0] !== posFirstPatternCol
    ) {
      nextPatternExist = false;
      break;
    }
  }

  return nextPatternExist;
}

function gridSearch(G, P) {
  let possiblePatternExist = false;

  // we try to find the first pattern, it doesn't mean the next pattern is bellow it
  let posPossibleFirstPattern = findIndexRowPatternTopLeft(
    G,
    P[0],
    P.length,
    0,
    G.length,
    0
  );

  // console.log(posPossibleFirstPattern);

  if (posPossibleFirstPattern.length > 0) {
    for (
      let i = 0;
      i < posPossibleFirstPattern.length && !possiblePatternExist;
      i++
    ) {
      const element = posPossibleFirstPattern[i];
      for (let j = 0; j < element[1].length; j++) {
        const element2 = element[1][j];
        let tempResult = resolve(G, P, element[0], element2);
        if (tempResult) {
          possiblePatternExist = true;
        }
      }
    }
  }
  console.log(possiblePatternExist ? "YES" : "NO");
  return possiblePatternExist ? "YES" : "NO";
}

gridSearch(["123456", "567890", "234567", "194729"], ["78", "67"]);

gridSearch(
  ["1234567890", "0987654321", "1111111111", "1111111111", "2222222222"],
  ["876543", "111111", "111111"]
);

gridSearch(
  [
    "7283455864",
    "6731158619",
    "8988242643",
    "3830589324",
    "2229505813",
    "5633845374",
    "6473530293",
    "7053106601",
    "0834282956",
    "4607924137",
  ],
  ["9505", "3845", "3530"]
);

// gridSearch(
//   [
//     "400453592126560",
//     "114213133098692",
//     "474386082879648",
//     "522356951189169",
//     "887109450487496",
//     "252802633388782",
//     "502771484966748",
//     "075975207693780",
//     "511799789562806",
//     "404007454272504",
//     "549043809916080",
//     "962410809534811",
//     "445893523733475",
//     "768705303214174",
//     "650629270887160",
//   ],

//   ["99", "99"]
// );

// gridSearch(
//   [
//     "111111111111111",
//     "111111111111111",
//     "111111011111111",
//     "111111111111111",
//     "111111111111111",
//   ],
//   ["11111", "11111", "11110"]
// );

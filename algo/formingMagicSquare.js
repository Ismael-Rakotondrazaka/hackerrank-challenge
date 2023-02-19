function formingMagicSquare(s) {
  // Write your code here

  const sides = [
    [2, 7, 6],
    [6, 1, 8],
    [8, 3, 4],
    [4, 9, 2],
  ];

  const headArray = s[0];

  let indexOccurrence = [];
  for (let i = 0; i < sides.length; i++) {
    const side = sides[i];
    let occurrence = 0;
    for (let j = 0; j < side.length; j++) {
      const element2 = side[j];
      for (let k = 0; k < headArray.length; k++) {
        const element3 = headArray[k];
        if (element3 === element2) {
          occurrence++;
        }
      }
    }
    indexOccurrence.push(occurrence);
  }
  console.log(indexOccurrence);

  //   need to check the unique occurrence

  let headIndex = 0;
  let maxOccurrence = 0;
  let duplicate = 0;

  for (const key in indexOccurrence) {
    if (Object.hasOwnProperty.call(indexOccurrence, key)) {
      const element = indexOccurrence[key];
      if (element > maxOccurrence) {
        headIndex = key;
        maxOccurrence = element;
        duplicate = 1;
      } else if (element === maxOccurrence) {
        duplicate++;
      }
    }
  }
  console.log(maxOccurrence, duplicate /* duplicateIndex */);
  let duplicateIndex = [];
  indexOccurrence.forEach((value, i, arr) => {
    if (value === maxOccurrence) {
      duplicateIndex.push(i);
    }
  });
  console.log("duplicateIndex", duplicateIndex);

  let wellPlaced = [];
  let wellPlacedMaxIndex = 0;
  let wellPlacedMax = 0;
  for (let i = 0; i < duplicate; i++) {
    const element = sides[duplicateIndex[i]];
    let place = 0;
    for (let j = 0; j < element.length; j++) {
      const element2 = element[j];

      if (element2 === headArray[j]) {
        place++;
      }
    }
    if (wellPlacedMax < place) {
      wellPlacedMax = place;
      wellPlacedMaxIndex = i;
    }
    wellPlaced.push(place);
  }
  console.log("wellPlaced: ", wellPlaced, wellPlacedMax, wellPlacedMaxIndex);

  let temp2 = duplicateIndex[wellPlacedMaxIndex];
  console.log("temp2", temp2);
  //   let finalMax = sides[temp2];
  //   console.log(finalMax);
  maxOccurrence = temp2;

  const up = sides.at(maxOccurrence);
  const left = sides.at(maxOccurrence - 1);
  const down = sides.at(maxOccurrence - 2);
  const right = sides.at(maxOccurrence - 3);

  console.log(up, left, down, right);

  let cost = 0;
  if (s[0][0] !== up[0]) {
    cost += Math.abs(s[0][0] - up[0]);
  }
  if (s[0][1] !== up[1]) {
    cost += Math.abs(s[0][1] - up[1]);
  }
  if (s[0][2] !== up[2]) {
    cost += Math.abs(s[0][2] - up[2]);
  }

  if (s[1][0] !== left[1]) {
    cost += Math.abs(s[1][0] - left[1]);
  }
  if (s[1][1] !== 5) {
    cost += Math.abs(s[1][1] - 5);
  }
  if (s[1][2] !== right[1]) {
    cost += Math.abs(s[1][2] - right[1]);
  }

  if (s[2][0] !== left[0]) {
    cost += Math.abs(s[2][0] - left[0]);
  }
  if (s[2][1] !== down[1]) {
    cost += Math.abs(s[2][1] - down[1]);
  }
  if (s[2][2] !== right[2]) {
    cost += Math.abs(s[2][2] - right[2]);
  }

  return cost;
}

console.log(
  formingMagicSquare([
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2],
  ])
);

console.log(
  formingMagicSquare([
    [4, 8, 2],
    [4, 5, 7],
    [6, 1, 6],
  ])
);

console.log(
  formingMagicSquare([
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 5],
  ])
);

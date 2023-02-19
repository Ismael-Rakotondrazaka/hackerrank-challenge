function larrysArray(A = [0]) {
  // Write your code here

  const n = A.length;

  let lastSorted = -1;
  let result = "NO";

  function getIndexes(i = 0, arr = []) {
    let result = [];
    const indexI = arr.findIndex((val) => val === i);

    if (indexI >= lastSorted + 3) {
      result.push(indexI - 2, indexI - 1, indexI);
    } else if (indexI === lastSorted + 2 && indexI + 1 < n) {
      result.push(indexI - 1, indexI, indexI + 1);
    }

    return result;
  }

  function rotate(a, b, c, arr) {
    // indexes
    const valA = arr[a];
    const valB = arr[b];
    const valC = arr[c];

    const min = Math.min(valA, valB, valC);
    const initialArr = [a, b, c];

    const arrSort = [
      {
        index: a,
        value: valA,
      },
      {
        index: b,
        value: valB,
      },
      {
        index: c,
        value: valC,
      },
      {
        index: a,
        value: valA,
      },
      {
        index: b,
        value: valB,
      },
      {
        index: c,
        value: valC,
      },
    ];

    const index = arrSort.findIndex((val) => val.value === min);
    const newPos = arrSort.splice(index, 3);

    newPos.forEach((val, i) => {
      arr[initialArr[i]] = val.value;
    });
  }

  let i = 1;

  while (i <= n) {
    const initialIndex = A.findIndex((val) => val === i);

    if (initialIndex === i - 1) {
      lastSorted = i - 1;
      i++;

      if (i === n) {
        result = "YES";
      }
    } else {
      const indexes = getIndexes(i, A);
      if (indexes.length === 0) {
        break;
      } else {
        rotate(...indexes, A);
        const newIndex = A.findIndex((val) => val === i);

        if (newIndex === i - 1) {
          lastSorted = i - 1;
          i++;
        }
      }
    }
  }

  console.log({ A });
  console.log({ result });
}

larrysArray([1, 6, 5, 2, 4, 3]);

larrysArray(["1 2 3 5 4".split(" ").map((val) => +val)]);

flatlandSpaceStations(5, [0, 4]);
flatlandSpaceStations(3, [1]);
flatlandSpaceStations(6, [0, 1, 2, 4, 3, 5]);
flatlandSpaceStations(10, [0, 3, 9]);
flatlandSpaceStations(7, [3, 6]);

function flatlandSpaceStationsOptimized(n, c) {
  c = c.sort((a, b) => a - b);
  let max = 0;

  for (let i = 0; i < c.length - 1; i++) {
    let nearest = 0;
    let dist = Math.floor(Math.abs(c[i] - c[i + 1]) / 2);
    // console.log(dist);
    if (dist > max) {
      max = dist;
    }
  }

  if (c[0] !== 0) {
    if (c[0] > max) {
      max = c[0];
    }
  }

  let lastIndex = c.length - 1;
  if (c[lastIndex] !== n - 1) {
    // console.log("dif", n- 1, c[lastIndex], n - 1 - c[lastIndex], max);
    let diff = n - 1 - c[lastIndex];
    if (diff > max) {
      max = diff;
    }
  }
  console.log(max);
}



function flatlandSpaceStations(n, c) {
  let max = 0;
  for (let i = 0; i < n; i++) {
    let nearest = 0;
    for (let j = 0; j < c.length; j++) {
      if (!c.includes(i)) {
        console.log(i, j);
        let dist = Math.abs(c[j] - i);
        console.log("dist", dist);
        if (nearest === 0 || nearest > dist) {
          nearest = dist;
        }
      }
    }

    if (max < nearest) {
      max = nearest;
    }
  }
  console.log(max);
}

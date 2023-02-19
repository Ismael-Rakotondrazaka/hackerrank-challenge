jumpingOnClouds(8, [0, 0, 1, 0, 0, 1, 1, 0], 2);
jumpingOnClouds(4, [0, 0, 1, 0], 2);

function jumpingOnClouds(n, c, k) {
  let index = 0;
  let energy = 100;
  do {
    index = (index + k) % n;
    console.log("index", index);
    energy -= c[index] === 0 ? 1 : 3;
  } while (index !== 0 && energy > 0);
  console.log(energy);
}

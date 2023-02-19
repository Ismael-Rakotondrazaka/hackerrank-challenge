/* 
In this problem, we need to determine the ID of the prisoner reached after moving M-1 steps from S.

ID of last prisoner= (M-1+S)

Since we are moving in a circle, we need to get the modulo of this sum with N.
Because the IDs start from 1, the ID of the last prisoner is (M - 1 + S - 1) % N + 1)
*/

function saveThePrisoner(n, m, s) {
  // id of prisoner - 1 because % is dealing with 0-base index
  // then revert to the id base by adding + 1
  const result = ((m - 1 + s - 1) % n) + 1;
  console.log(result);
  return result;
}

saveThePrisoner(4, 6, 2); // 3
saveThePrisoner(7, 19, 2); // 6
saveThePrisoner(3, 7, 3); // 3
saveThePrisoner(5, 2, 1); // 2
saveThePrisoner(5, 2, 2); // 3

minimumNumber(11, "#HackerRank");
minimumNumber(3, "Ab1");

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong

  let error = 0;
  let charToAdd = 0;

  if (!/\d+/g.test(password)) error++;
  if (!/[!@#$%^&*()-+]+/g.test(password)) error++;
  if (!/[a-z]+/g.test(password)) error++;
  if (!/[A-Z]+/g.test(password)) error++;

  console.log(error > 6 - n ? error : 6 - n);
  return error > 6 - n ? error : 6 - n;
}

camelcase("saveChangesInTheEditor");
function camelcase(s) {
  // Write your code here
  s = s.split("");
  let result = s.reduce((prev, curr, i, arr) => {
    console.log(prev, curr);
    return /[A-Z]/.test(curr) ? ++prev : prev;
  }, 0);
  return ++result;
}

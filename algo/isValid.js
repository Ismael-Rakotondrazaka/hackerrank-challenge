// isValid("accb");
/* isValid(
  "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"
); */
isValid("aabbc");
// isValid("aabbcd");
function isValid(s) {
  // Write your code here
//   console.log(s.split("").indexOf("n"), s.length);

  let redundant = {};
  s.split("").forEach((element) => {
    redundant[element] = Object.hasOwnProperty.call(redundant, element)
      ? redundant[element] + 1
      : 1;
  });
  console.log(redundant);

  let sameCount = {};
  for (const key in redundant) {
    if (Object.hasOwnProperty.call(redundant, key)) {
      const element = redundant[key];
      sameCount[element] = Object.hasOwnProperty.call(sameCount, element)
        ? sameCount[element] + 1
        : 1;
    }
  }
  //   console.log(sameCount);

  let sameCountArr = [];
  for (const key in sameCount) {
    if (Object.hasOwnProperty.call(sameCount, key)) {
      const element = sameCount[key];
      sameCountArr.push({ [key]: element });
    }
  }
  sameCountArr.sort(
    (a, b) => parseInt(Object.keys(a)[0]) - parseInt(Object.keys(b)[0])
  );
  console.log(sameCountArr);
  //   let valid = false;
  //   if (
  //     sameCountArr === 1 ||
  //     (sameCountArr === 2 &&
  //       Math.min(...sameCountArr) === Math.max(...sameCountArr) - 1)
  //   ) {
  //     valid = true;
  //   }

  console.log(
    sameCountArr.length === 1 ||
      (sameCountArr.length === 2 &&
        parseInt(Object.keys(sameCountArr[1])[0]) -
          parseInt(Object.keys(sameCountArr[0])[0]) ===
          1 &&
        Object.values(sameCountArr[1])[0] === 1)
      ? "YES"
      : "NO"
  );
}

superReducedString("abba");
superReducedString("aab");
superReducedString("aaabccddd");

function superReducedString(s) {
  // Write your code here
  s = s.split("");
  let noSuccessive = false;
  let startSuccessive = 0;
  let endSuccessive = 1;
  let index = 1;
  do {
    console.log("actual index", s[index]);
    console.log("startSuccessive", startSuccessive);
    console.log("endSuccessive", endSuccessive);
    console.log("noSuccessive", noSuccessive);
    console.log("actual string", s);

    console.log("start, i", s[startSuccessive], s[index]);
    console.log("start, end - 1", startSuccessive, endSuccessive - 1);
    if (s[startSuccessive] === s[index]) {
      
    //   endSuccessive++;
    //   index++;
    //   noSuccessive = false;
    // } else if (startSuccessive !== endSuccessive - 1) {
      s.splice(startSuccessive, /* endSuccessive - startSuccessive */2);
      startSuccessive = 0;
      endSuccessive = 1;
      index = 1;
      noSuccessive = true;
    } else {
      startSuccessive++;
      endSuccessive++;
      index++;
      noSuccessive = true;
    }
  } while (
    (!noSuccessive || (noSuccessive && index !== s.length)) &&
    s.length > 0
  );

  console.log("result", s);
}

//   from 1 to 19
const unit = [
  "midnight",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
//   from 20 to 60
const diz = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
];

function timeInWords(h, m) {
  // Write your code here
  console.log(h, m);
  let result = "";
  if (m === 0) {
    result = `${unit[h]} o' clock`;
  } else if (m >= 1 && m <= 30) {
    result = `${getMinutes(m)} past ${unit[h]}`;
  } else {
    result = `${getMinutesHalf(m)} to ${unit[h + 1]}`;
  }
  return result;
}

function getMinutes(minutes) {
  let result = "";

  if (minutes >= 1 && minutes <= 19) {
    if (minutes === 15) {
      result = "quarter";
    } else {
      result = `${unit[minutes]} ${minutes === 1 ? "minute" : "minutes"}`;
    }
  } else {
    // 20 to 60
    if (minutes >= 20 && minutes <= 29) {
      const dozenNum = Math.floor(minutes / 10);
      const dozen = diz[dozenNum - 2];
      const unity = parseInt(minutes.toString().slice(-1), 10);
      result = `${dozen} ${unit[unity]} minutes`;
    } else if (minutes === 30) {
      result = "half";
    } else {
      result = getMinutesHalf(minutes);
    }
  }

  return result;
}

function getMinutesHalf(minutes) {
  let sub = 60 - minutes;
  const result = getMinutes(sub);
  console.log("from getMinutes", result);

  return result;
}

console.log(timeInWords(5, 47));
console.log(timeInWords(6, 35));
console.log(timeInWords(7, 15));
console.log(timeInWords(5, 30));

function timeConversion(s) {
  // Write your code here
  let timeArr = s.split(":");
  let dayIndicator = s.slice(-2);
  timeArr[2] = timeArr[2].slice(0, 2);
  if (dayIndicator === "PM") {
    if (timeArr[0] === "12") {
      return `12:${timeArr[1]}:${timeArr[2]}`;
    } else {
      return `${12 + parseInt(timeArr[0], 10)}:${timeArr[1]}:${timeArr[2]}`;
    }
  } else if (timeArr[0] === "12") {
    return `00:${timeArr[1]}:${timeArr[2]}`;
  } else {
    return timeArr.join(":");
  }
}

console.log(timeConversion("12:05:45AM"));

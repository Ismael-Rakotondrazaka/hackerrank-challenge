function countingValleys(steps, path) {
  // Write your code here
  //   let stepDone = 0;
  let altitude = 0;

  let valleyCount = 0;

  //   let lastStep;
  //   let lastStep2;
  //   let lastStep3;

  for (let i = 0; i < steps; i++) {
    if (path.charAt(i) === "U") {
      altitude++;
    } else {
      // if (lastStep === "D" && lastStep2 === "U" && lastStep3 === "D") {
      //   valleyCount++;
      // }
      altitude--;
    }
    if (path.charAt(i) === "U" && altitude === 0) {
      valleyCount++;
    }

    // lastStep3 = lastStep2;
    // lastStep2 = lastStep;
    // lastStep = path.charAt(i);
  }

  return valleyCount;
}

console.log(countingValleys(8, "UDDDUDUU"));
console.log(countingValleys(8, "DDUUDDUDUUUD"));

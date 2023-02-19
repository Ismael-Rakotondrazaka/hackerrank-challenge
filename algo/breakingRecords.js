function breakingRecords(scores) {
    // Write your code here
    let lowCount = 0;
    let highCount = 0;
    let lowValue = scores[0];
  
    let highValue = scores[0];
  
    for (let i = 1; i < scores.length; i++) {
      if (lowValue > scores[i]) {
        lowValue = scores[i];
        lowCount++;
      }
      if (highValue < scores[i]) {
        highValue = scores[i];
        highCount++;
      }
    }
    return [highCount, lowCount];
  }
  
  console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
  
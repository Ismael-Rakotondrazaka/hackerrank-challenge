function climbingLeaderboard(ranked, player) {
  // Write your code here

  const result = player.map((value, i, arr) => {
    // let tempRank = ranked.concat(value);
    //   tempRank.push(value);
    // tempRank.sort((a, b) => b - a);
    // console.log(tempRank);

    /* let prevScore = Math.max(tempRank);
    for (let i = 0; i < tempRank.length; i++) {
      const element = tempRank[i];
      if (element === value) {
        return actualRank + 1;
      } else if (element < prevScore) {
        actualRank++;
      } else if (i === 0) {
        actualRank++;
      }
      prevScore = element;
    }
    return actualRank + 1; */

    //   return tempRank.indexOf(value);
    // let actualRank = 0;
    let prevScore = 0;
    let possibleRank = [...new Set(ranked)].length + 1;

    for (let i = ranked.length - 1; i >= 0; i--) {
      const currScore = ranked[i];

      console.log("prevScore", prevScore);
      console.log("currScore", currScore);
      console.log("actualRank", possibleRank);
      console.log("value", value);
      console.log("-----");
      if (currScore === value) {
        // if (i === ranked.length - 1) {
          possibleRank--;
        // }
        break;
      } else {
        if (currScore > value) {
          break;
        } else {
          if (currScore === prevScore) {
            //   possibleRank--;
            continue;
          } else if (currScore > prevScore) {
            possibleRank--;
          } else {
            console.log("impossible");
          }
        }
      }

      prevScore = currScore;
      console.log("======================");
      // return actualRank + 1;
    }

    // if (res === 0) {
    //     return
    // }
    return possibleRank;
  });

  return result;
}

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]));
// console.log(
//   climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
// );

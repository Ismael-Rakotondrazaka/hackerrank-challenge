function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let combinations = [];
    for (let i = 0; i < keyboards.length; i++) {
        // const element = keyboards[i];
        for (let j = 0; j < drives.length; j++) {
            // const element = drives[j];
            let sum = keyboards[i] + drives[j];
            console.log("sum", sum, b);
            if (sum <= b) {
                combinations.push(sum)
            }
        }
    }
    console.log(combinations);
    let result;
    if (combinations.length === 0) {
        result = -1;
    } else {
        result = combinations.reduce((prev, curr, i, arr) => {
            return curr > prev ? curr : prev;
        }, 0)
    }
    console.log(result);
}

getMoneySpent([3, 1], [5, 2, 8], 10)
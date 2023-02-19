function cutTheSticks(arr) {
    // Write your code here
    let result = [];
    let tempArr = arr;
    let min = 1;
    while (tempArr.length > 0 && min !== 0) {
         min = Math.min(...tempArr);
        tempArr.forEach((element, i, arr) => {
            tempArr[i] = element - min;
        });
        tempArr = tempArr.filter((value, i, arr) => value > 0);
        // console.log(tempArr);
        result.push( tempArr.length);
        // console.log(tempArr);
    }
    // console.log(arr);
    result.unshift(arr.length)
    result.pop()
    return result;
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));
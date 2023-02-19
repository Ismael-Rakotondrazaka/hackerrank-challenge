function gameWithCells(n, m) {
    // Write your code here
    // const nbrCells = n * m;
    const isOddN = n % 2 === 0;
    const isOddM = m % 2 === 0;
    const oddN = isOddN ? n : n - 1;
    const oddM = isOddM ? m : m - 1;
    let result = (oddN * oddM) / 4;
    if (!isOddN || !isOddM) {
        if (!isOddN) {
            result += Math.floor(n / 2);
        } else if (!isOddM) {
            result += Math.floor(m / 2);
        }
        result++;
    }
    // result++;
    return result;
}

console.log(gameWithCells(6, 20));
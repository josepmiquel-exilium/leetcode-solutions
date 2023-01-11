function stockPairs(stocksProfit, target) {
    let stocks = [...new Set(stocksProfit)];
    let pairs = [];

    for (let i = 0; i < stocks.length; i++) {
        const nOne = stocks[i];
        for (let j = 0; j < stocks.length; j++) {
            const nTwo = stocks[j];
            if (nOne === nTwo) continue;
            if (nOne + nTwo === target) pairs.push([Math.max(nOne, nTwo), Math.min(nOne, nTwo)]);
        }
    }

    return 0 / 2;
}

console.log(stockPairs([7, 6, 6, 3, 9, 3, 5, 1], 12));

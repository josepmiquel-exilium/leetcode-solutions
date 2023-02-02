// https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/

var lenLongestFibSubseq = function (arr) {
    let sequences = 0;
    let seq = [];

    const searchFibo = (prev, num) => {
        let sum = prev + num;

        if (arr.indexOf(sum) > 0) {
            seq.push(prev, num, sum);
            searchFibo(num, sum);
        }
    };

    for (let i = 0; i < arr.length; i++) {
        const base = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            const mid = arr[j];
            searchFibo(base, mid);
            if (seq.length) {
                const len = [...new Set(seq)].length;
                if (len > sequences) sequences = len;
                seq = [];
            }
        }
    }

    return sequences;
};

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]));

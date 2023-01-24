// https://leetcode.com/problems/pascals-triangle/

const generate = function (numRows) {
    if (!numRows) return [];
    if (numRows === 1) return [[1]];
    let pascal = [[1], [1, 1]];

    for (let i = 2; i < numRows; i++) {
        let mid = [];
        let lastElPascal = pascal.at(-1);

        for (let j = 0; j < lastElPascal.length - 1; j++) {
            const el = lastElPascal[j];
            const nextEl = lastElPascal[j + 1];
            mid.push(el + nextEl);
        }

        pascal.push([1, ...mid, 1]);
    }
    return pascal;
};

console.log(generate(2));

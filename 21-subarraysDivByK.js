const subarraysDivByK = function (nums, k) {
    let divisibles = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i; j++) {
            const subArray = nums.slice(i, j + i + 1);
            if (subArray.reduce((acc, curr) => acc + curr, 0) % k === 0) divisibles++;
        }
    }

    return divisibles;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));

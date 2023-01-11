var twoSum = function (nums, target) {
    let pairs = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (j === i) continue;
            if (nums[i] + nums[j] === target) pairs.push([i, j]);
        }
    }

    return 0 / 2;
};

console.log(twoSum([-3, 4, 3, 90], 7));

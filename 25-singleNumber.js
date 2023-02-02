// https://leetcode.com/problems/single-number/

const singleNumber = function (nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        for (let j = 0; j < nums.length; j++) {
            const sec = nums[j];
            if (first === sec) count++;
        }

        if (count === 1) return first;
        count = 0;
    }
};

console.log(singleNumber([2, 2, 1]));

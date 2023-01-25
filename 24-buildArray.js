// https://leetcode.com/problems/build-array-from-permutation/

const buildArray = function (nums) {
    return nums.reduce((acc, curr) => {
        acc.push(nums[curr]);
        return acc;
    }, []);
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));

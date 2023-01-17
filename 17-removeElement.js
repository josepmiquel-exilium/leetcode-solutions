const removeElement = function (nums, val) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) nums[total++] = nums[i];
    }

    return total;
};

console.log(removeElement([3, 2, 2, 3], 3));

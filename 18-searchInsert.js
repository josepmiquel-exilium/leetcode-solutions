const searchInsert = function (nums, target) {
    let pos = nums.indexOf(target);

    if (pos < 0) {
        pos = nums
            .concat([target])
            .sort((a, b) => a - b)
            .indexOf(target);
    }

    return pos;
};

console.log(searchInsert([1, 3, 5, 6], 4));

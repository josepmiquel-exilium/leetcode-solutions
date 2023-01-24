const permute = (nums) => {
    let permutations = [];
    if (nums.length === 1) {
        return [nums];
    }

    for (let i = 0; i < nums.length; i++) {
        let subPerms = permute(nums.slice(0, i).concat(nums.slice(i + 1)));
        for (let j = 0; j < subPerms.length; j++) {
            subPerms[j].unshift(nums[i]);
            permutations.push(subPerms[j]);
        }
    }
    return permutations;
};

console.log(permute([1, 2, 3]));

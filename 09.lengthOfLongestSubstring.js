const lengthOfLongestSubstring = function (s) {
    let left = 0;
    let max = 0;
    let result = new Set();

    for (let r = 0; r < s.length; r++) {
        //The code will check for an existing item on the set
        // If found, all the previously saved items will be deleted
        // the set will return to being empty
        while (result.has(s[r])) {
            result.delete(s[left]);
            left += 1;
        }
        result.add(s[r]);
        max = Math.max(max, r - left + 1);
    }

    return max;
};

console.log(lengthOfLongestSubstring('aabbbcdf'));

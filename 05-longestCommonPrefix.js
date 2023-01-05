var longestCommonPrefix = function (strs) {
    let pre = '';

    for (let i = 0; i < strs[0].length; i++) {
        let lastL = '';
        let repetead = 1;
        for (let j = 0; j < strs.length; j++) {
            const letter = strs[j][i];
            letter === lastL ? repetead++ : (lastL = letter);
        }

        if (repetead === strs.length) pre += lastL;
        else break;
    }

    return pre;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

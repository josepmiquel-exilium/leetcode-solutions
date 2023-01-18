const lengthOfLastWord = function (s) {
    return s
        .split(' ')
        .filter((e) => e.length)
        .at(-1).length;
};

console.log(lengthOfLastWord('   fly me   to   the moon  '));

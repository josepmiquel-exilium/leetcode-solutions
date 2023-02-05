// https://leetcode.com/problems/verifying-an-alien-dictionary/description/

var isAlienSorted = function (words, order) {
    function sortByAlphabet(arr, alphabet) {
        return [...arr].sort((a, b) => {
            let i = 0;
            while (i < a.length && i < b.length) {
                let aIndex = alphabet.indexOf(a[i]);
                let bIndex = alphabet.indexOf(b[i]);
                if (aIndex !== bIndex) {
                    return aIndex - bIndex;
                }
                i++;
            }
            return a.length - b.length;
        });
    }

    let sorted = sortByAlphabet(words, order);

    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;

        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }

        return true;
    }

    return arraysEqual(sorted, words);
};

console.log(isAlienSorted(['kuvp', 'q'], 'ngxlkthsjuoqcpavbfdermiywz'));

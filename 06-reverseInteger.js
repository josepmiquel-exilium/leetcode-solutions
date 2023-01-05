var reverse = function (x) {
    let MAX_INT = Math.pow(2, 31);
    let reversed = Number(String(x).split('').reverse().join(''));

    if (x < 0) reversed = -Math.abs(reversed.slice(0, -1));

    if (Math.abs(reversed) > MAX_INT) return 0;
    return reversed;
};

console.log(reverse(891231));

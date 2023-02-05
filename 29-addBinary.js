// https://leetcode.com/problems/add-binary/

const addBinary = (a, b) => {
    // const intToBinary = (int) => {
    //     let lastQuotient = int;
    //     let remainders = [];

    //     while (lastQuotient !== 0) {
    //         remainders.push(lastQuotient % 2);
    //         lastQuotient = Math.floor(lastQuotient / 2);
    //     }

    //     return Number(remainders.reverse().join(''));
    // };

    // function sumBinary(a, b) {
    //     return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
    // }

    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
};

console.log(addBinary(11, 1));

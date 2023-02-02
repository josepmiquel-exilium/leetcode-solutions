// https://leetcode.com/problems/happy-number/

const isHappy = (n) => {
    let split = String(n).split('');
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        sum = 0;

        for (let j = 0; j < split.length; j++) {
            const element = Number(split[j]);
            sum += element * element;
        }

        if (sum === 1) return true;
        split = String(sum).split('');
    }

    return false;
};

console.log(isHappy(7));

// 49, 97, 130, 10, 1

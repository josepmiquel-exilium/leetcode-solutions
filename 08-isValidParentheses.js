const isValid = (s) => {
    const stack = [];

    const openingMap = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}'],
    ]);

    for (let i = 0; i < s.length; i += 1) {
        const element = s[i];

        if (openingMap.has(element)) {
            // if the element is an opening character
            stack.push(openingMap.get(element));
        } else if (element !== stack.pop()) {
            // if the element is a closing character
            return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid('((()))'));

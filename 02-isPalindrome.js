var isPalindrome = function (head) {
    return head.join() === head.reverse().join();
};

console.log(isPalindrome([1, 2]));

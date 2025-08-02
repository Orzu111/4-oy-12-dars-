"use strict";
// 1 mash1
var isValid = function (s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            let last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

/**
 * @param {string} s
 * @return {string}
 */
function reverseParentheses(s) {
    let stack = [];
    let currentStr = "";

    for (let char of s) {
        if (char === '(') {
            stack.push(currentStr);
            currentStr = "";
        } else if (char === ')') {
            currentStr = currentStr.split('').reverse().join('');
            currentStr = stack.pop() + currentStr;
        } else {
            currentStr += char;
        }
    }

    return currentStr;
}

const input = "(u(love)i)";


var maximumGain = function(s, x, y) {

    let totalScore = 0;

    // Define a helper function to remove a substring and count the score
    function removeSubstring(s, substr, points) {
        let stack = [];
        let score = 0;
        for (let char of s) {
            stack.push(char);
            if (stack.length >= 2 && stack[stack.length - 2] + stack[stack.length - 1] === substr) {
                stack.pop();
                stack.pop();
                score += points;
            }
        }
        return { newString: stack.join(''), score: score };
    }

    // Determine the order of removal based on the points
    if (x > y) {
        let result = removeSubstring(s, "ab", x);
        totalScore += result.score;
        result = removeSubstring(result.newString, "ba", y);
        totalScore += result.score;
    } else {
        let result = removeSubstring(s, "ba", y);
        totalScore += result.score;
        result = removeSubstring(result.newString, "ab", x);
        totalScore += result.score;
    }

    return totalScore;
}

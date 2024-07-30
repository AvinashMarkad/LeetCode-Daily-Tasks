/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const n = s.length;
    let prefixBCount = new Array(n).fill(0);
    let suffixACount = new Array(n).fill(0);

    // Count of 'b' from the start to each position
    for (let i = 0; i < n; i++) {
        if (s[i] === 'b') {
            prefixBCount[i] = (i > 0 ? prefixBCount[i - 1] : 0) + 1;
        } else {
            prefixBCount[i] = i > 0 ? prefixBCount[i - 1] : 0;
        }
    }

    // Count of 'a' from each position to the end
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === 'a') {
            suffixACount[i] = (i < n - 1 ? suffixACount[i + 1] : 0) + 1;
        } else {
            suffixACount[i] = i < n - 1 ? suffixACount[i + 1] : 0;
        }
    }

    // Calculate the minimum deletions
    let minDeletions = Math.min(prefixBCount[n - 1], suffixACount[0]); // all 'b's or all 'a's

    for (let i = 0; i < n - 1; i++) {
        minDeletions = Math.min(minDeletions, prefixBCount[i] + suffixACount[i + 1]);
    }

    return minDeletions;
};

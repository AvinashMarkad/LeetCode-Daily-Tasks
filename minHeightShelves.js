/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    const n = books.length;
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        let totalWidth = 0;
        let maxHeight = 0;

        for (let j = i; j > 0; j--) {
            totalWidth += books[j - 1][0];
            if (totalWidth > shelfWidth) break;
            
            maxHeight = Math.max(maxHeight, books[j - 1][1]);
            dp[i] = Math.min(dp[i], dp[j - 1] + maxHeight);
        }
    }

    return dp[n];
};

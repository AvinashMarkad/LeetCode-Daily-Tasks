/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    const rows = rowSum.length;
    const cols = colSum.length;
    const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const value = Math.min(rowSum[i], colSum[j]);
            matrix[i][j] = value;
            rowSum[i] -= value;
            colSum[j] -= value;
        }
    }

    return matrix;
};

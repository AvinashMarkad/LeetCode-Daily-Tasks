/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    const minRowValues = [];
    const maxColValues = Array(matrix[0].length).fill(Number.MIN_SAFE_INTEGER);
    const luckyNumbers = [];

    // Find the minimum values in each row
    for (let row of matrix) {
        minRowValues.push(Math.min(...row));
    }

    // Find the maximum values in each column
    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 0; row < matrix.length; row++) {
            maxColValues[col] = Math.max(maxColValues[col], matrix[row][col]);
        }
    }

    // Find the intersection of minRowValues and maxColValues
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === minRowValues[row] && matrix[row][col] === maxColValues[col]) {
                luckyNumbers.push(matrix[row][col]);
            }
        }
    }

    return luckyNumbers;
};

// Example usage:
const matrix = [
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17]
];
console.log(luckyNumbers(matrix)); // Output: [15]

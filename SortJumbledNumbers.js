/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    // Function to map a number based on the mapping array
    const mapNumber = (num) => {
        return parseInt(num.toString().split('').map(digit => mapping[digit]).join(''), 10);
    };
    
    // Create an array of objects containing the original number and its mapped value
    let mappedNums = nums.map(num => ({ original: num, mapped: mapNumber(num) }));
    
    // Sort the array based on the mapped values
    mappedNums.sort((a, b) => {
        if (a.mapped !== b.mapped) {
            return a.mapped - b.mapped;
        } else {
            return nums.indexOf(a.original) - nums.indexOf(b.original);
        }
    });
    
    // Return the sorted array of original numbers
    return mappedNums.map(item => item.original);
};

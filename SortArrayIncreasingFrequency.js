/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    // Step 1: Count the frequencies
    const frequencyMap = new Map();
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Step 2: Sort the array with a custom comparator
    nums.sort((a, b) => {
        const freqA = frequencyMap.get(a);
        const freqB = frequencyMap.get(b);
        
        if (freqA === freqB) {
            // If frequencies are the same, sort by value in descending order
            return b - a;
        } else {
            // Otherwise, sort by frequency in ascending order
            return freqA - freqB;
        }
    });
    
    return nums;
};

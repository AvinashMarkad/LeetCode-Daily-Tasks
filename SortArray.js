/**
 * Sorts an array of integers in ascending order.
 * @param {number[]} nums - The array of integers to be sorted.
 * @return {number[]} - The sorted array.
 */
var sortArray = function(nums) {
  // Helper function to perform the quicksort
  const quickSort = (arr, left, right) => {
    if (left < right) {
      const pivotIndex = partition(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  };

  // Helper function to partition the array
  const partition = (arr, left, right) => {
    // Choose a random pivot and swap with the last element
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
  };

  return quickSort(nums, 0, nums.length - 1);
};

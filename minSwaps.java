class Solution {
    public int minSwaps(int[] nums) {
        int n = nums.length;
        
        // Step 1: Count the total number of 1's in the array
        int countOnes = 0;
        for (int num : nums) {
            if (num == 1) {
                countOnes++;
            }
        }
        
        // Edge case: If there are no 1's, no swaps are needed
        if (countOnes == 0) {
            return 0;
        }
        
        // Step 2: Create a doubled array to handle circular nature
        int[] doubledArray = new int[2 * n];
        for (int i = 0; i < 2 * n; i++) {
            doubledArray[i] = nums[i % n];
        }
        
        // Step 3: Use sliding window to find the minimum number of swaps
        int maxOnesInWindow = 0;
        int currentOnesCount = 0;
        
        // Initialize the first window
        for (int i = 0; i < countOnes; i++) {
            if (doubledArray[i] == 1) {
                currentOnesCount++;
            }
        }
        
        maxOnesInWindow = currentOnesCount;
        
        // Slide the window across the doubled array
        for (int i = countOnes; i < 2 * n; i++) {
            if (doubledArray[i] == 1) {
                currentOnesCount++;
            }
            if (doubledArray[i - countOnes] == 1) {
                currentOnesCount--;
            }
            maxOnesInWindow = Math.max(maxOnesInWindow, currentOnesCount);
        }
        
        // The minimum swaps needed is the number of zeros in the best window
        return countOnes - maxOnesInWindow;
    }
}

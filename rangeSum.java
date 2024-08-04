class Solution {
    public int rangeSum(int[] nums, int n, int left, int right) {
        int MOD = 1_000_000_007;
        
        List<Integer> subarraySums = new ArrayList<>();
        
        // Step 1: Generate all subarray sums
        for (int i = 0; i < n; i++) {
            int currentSum = 0;
            for (int j = i; j < n; j++) {
                currentSum += nums[j];
                subarraySums.add(currentSum);
            }
        }
        
        // Step 2: Sort the subarray sums
        Collections.sort(subarraySums);
        
        // Step 3: Calculate the sum from index `left` to `right` (1-based index)
        long rangeSum = 0;
        for (int i = left - 1; i < right; i++) {
            rangeSum = (rangeSum + subarraySums.get(i)) % MOD;
        }
        
        return (int) rangeSum;
    }
}

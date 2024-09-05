class Solution {
    public int[] missingRolls(int[] rolls, int mean, int n) {
        // Calculate the total number of rolls and the total sum required
        int m = rolls.length;
        int totalSum = (n + m) * mean;
        
        // Calculate the sum of the observed rolls
        int observedSum = 0;
        for (int roll : rolls) {
            observedSum += roll;
        }
        
        // Calculate the sum that the missing rolls should add up to
        int missingSum = totalSum - observedSum;
        
        // Check if the missing sum is within the feasible range
        if (missingSum < n || missingSum > 6 * n) {
            return new int[0]; // It's impossible to achieve the mean
        }
        
        // Distribute the missing sum across the missing rolls
        int[] result = new int[n];
        int average = missingSum / n;
        int remainder = missingSum % n;
        
        for (int i = 0; i < n; i++) {
            result[i] = average + (i < remainder ? 1 : 0);
        }
        
        return result;
    }
}

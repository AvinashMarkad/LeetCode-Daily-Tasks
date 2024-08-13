class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates); // Sort the array to handle duplicates easily
        backtrack(candidates, target, 0, new ArrayList<>(), result);
        return result;
    }
    
    private void backtrack(int[] candidates, int target, int start, List<Integer> tempList, List<List<Integer>> result) {
        if (target == 0) {
            result.add(new ArrayList<>(tempList)); // Found a valid combination
            return;
        }
        
        for (int i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            
            // If the current candidate exceeds the target, no need to proceed further
            if (candidates[i] > target) break;
            
            // Choose the current candidate and proceed
            tempList.add(candidates[i]);
            backtrack(candidates, target - candidates[i], i + 1, tempList, result);
            tempList.remove(tempList.size() - 1); // Backtrack
        }
    }
}

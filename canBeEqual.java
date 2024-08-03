class Solution {
    public boolean canBeEqual(int[] target, int[] arr) {
        // Sort both arrays
        Arrays.sort(target);
        Arrays.sort(arr);
        
        // Check if they are equal after sorting
        return Arrays.equals(target, arr);
    }
}

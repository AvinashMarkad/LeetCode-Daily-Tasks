import java.util.*;

class Solution {
    public String kthDistinct(String[] arr, int k) {
        Map<String, Integer> frequencyMap = new LinkedHashMap<>();
        
        // Count the frequency of each string
        for (String str : arr) {
            frequencyMap.put(str, frequencyMap.getOrDefault(str, 0) + 1);
        }
        
        // Iterate over the array to find the k-th distinct string
        for (String str : arr) {
            if (frequencyMap.get(str) == 1) {
                k--;
                if (k == 0) {
                    return str;
                }
            }
        }
        
        // If there are fewer than k distinct strings, return an empty string
        return "";
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        
        String[] arr1 = {"d","b","c","b","c","a"};
        int k1 = 2;
        System.out.println(sol.kthDistinct(arr1, k1)); // Output: "a"

        String[] arr2 = {"aaa","aa","a"};
        int k2 = 1;
        System.out.println(sol.kthDistinct(arr2, k2)); // Output: "aaa"

        String[] arr3 = {"a","b","a"};
        int k3 = 3;
        System.out.println(sol.kthDistinct(arr3, k3)); // Output: ""
    }
}

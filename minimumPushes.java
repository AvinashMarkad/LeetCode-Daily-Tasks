class Solution {
    public int minimumPushes(String word) {
        
        int[] letterCounts = new int[26];
        
        for (int i = 0; i < word.length(); ++i) {
            ++letterCounts[word.charAt(i) - 'a'];
        }
        Arrays.sort(letterCounts);
        int pushesRequired = 0;
        for (int i = 0; i < 26; ++i) {
            pushesRequired += (i / 8 + 1) * letterCounts[26 - i - 1];
        }
        return pushesRequired;
    }
}

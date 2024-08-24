class Solution {
    public String nearestPalindromic(String n) {
        int len = n.length();
        long num = Long.parseLong(n);
        
        // Generate prefix to create palindromes
        long prefix = Long.parseLong(n.substring(0, (len + 1) / 2));
        
        // Generate candidate palindromes
        long[] candidates = new long[] {
            mirror(prefix - 1, len),
            mirror(prefix, len),
            mirror(prefix + 1, len),
            (long) Math.pow(10, len - 1) - 1, // The lower bound edge case like "999"
            (long) Math.pow(10, len) + 1      // The upper bound edge case like "1001"
        };
        
        long closest = -1;
        for (long candidate : candidates) {
            if (candidate == num) continue; // skip the number itself
            if (closest == -1 || Math.abs(candidate - num) < Math.abs(closest - num) || 
                (Math.abs(candidate - num) == Math.abs(closest - num) && candidate < closest)) {
                closest = candidate;
            }
        }
        
        return String.valueOf(closest);
    }
    
    private long mirror(long prefix, int length) {
        StringBuilder sb = new StringBuilder();
        sb.append(prefix);
        String mirrored = sb.toString() + sb.reverse().substring(length % 2);
        return Long.parseLong(mirrored);
    }
}

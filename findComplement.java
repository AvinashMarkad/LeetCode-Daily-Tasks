class Solution {
    public int findComplement(int num) {
        // Get the bit length of the number (the number of bits required to represent the number)
        int bitLength = Integer.toBinaryString(num).length();
        
        // Create a bitmask with the same length as num's binary representation
        // A bitmask for flipping would be all 1s in the bit length of num
        int bitmask = (1 << bitLength) - 1;
        
        // XOR the number with the bitmask to get the complement
        return num ^ bitmask;
    }
}

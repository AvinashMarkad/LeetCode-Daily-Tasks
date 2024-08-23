class Solution {
    public String fractionAddition(String expression) {
        // Initialize numerator and denominator for the result
        int numerator = 0;
        int denominator = 1;
        
        // Use a scanner to parse the string
        int index = 0;
        while (index < expression.length()) {
            // Parse the sign
            int sign = 1;
            if (expression.charAt(index) == '-' || expression.charAt(index) == '+') {
                sign = expression.charAt(index) == '-' ? -1 : 1;
                index++;
            }
            
            // Parse the numerator
            int num = 0;
            while (index < expression.length() && Character.isDigit(expression.charAt(index))) {
                num = num * 10 + (expression.charAt(index) - '0');
                index++;
            }
            
            // Move past the '/'
            index++;
            
            // Parse the denominator
            int denom = 0;
            while (index < expression.length() && Character.isDigit(expression.charAt(index))) {
                denom = denom * 10 + (expression.charAt(index) - '0');
                index++;
            }
            
            // Update the numerator and denominator for the result
            numerator = numerator * denom + sign * num * denominator;
            denominator = denominator * denom;
            
            // Reduce the fraction by dividing by the greatest common divisor (GCD)
            int gcd = gcd(Math.abs(numerator), denominator);
            numerator /= gcd;
            denominator /= gcd;
        }
        
        // Return the result in the required format
        return numerator + "/" + denominator;
    }
    
    // Helper function to find the greatest common divisor (GCD) using Euclid's algorithm
    private int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}

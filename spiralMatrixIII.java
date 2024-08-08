class Solution {
    public int[][] spiralMatrixIII(int rows, int cols, int rStart, int cStart) {
        int[][] result = new int[rows * cols][2];
        int[] directions = {0, 1, 0, -1, 0}; // Represents direction changes: right, down, left, up
        int x = rStart, y = cStart, index = 0;
        int step = 1; // Step size, which increases every two directions

        result[index++] = new int[]{x, y}; // Add the starting position

        while (index < rows * cols) {
            for (int i = 0; i < 4; i++) { // Loop through the four directions
                for (int j = 0; j < step; j++) {
                    x += directions[i];
                    y += directions[i + 1];
                    if (x >= 0 && x < rows && y >= 0 && y < cols) {
                        result[index++] = new int[]{x, y};
                    }
                }
                if (i % 2 == 1) { // Increase step size after every two directions
                    step++;
                }
            }
        }

        return result;
    }
}

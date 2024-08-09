class Solution {
    public int numMagicSquaresInside(int[][] grid) {
        int count = 0;

        // Iterate over each possible 3x3 subgrid
        for (int i = 0; i <= grid.length - 3; i++) {
            for (int j = 0; j <= grid[i].length - 3; j++) {
                if (isMagicSquare(grid, i, j)) {
                    count++;
                }
            }
        }

        return count;
    }

    // Helper method to check if a 3x3 subgrid is a magic square
    private boolean isMagicSquare(int[][] grid, int row, int col) {
        // Check that all numbers are distinct and between 1 and 9
        boolean[] seen = new boolean[10];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                int num = grid[row + i][col + j];
                if (num < 1 || num > 9 || seen[num]) {
                    return false;
                }
                seen[num] = true;
            }
        }

        // Calculate the sum of the first row for comparison
        int sum = grid[row][col] + grid[row][col + 1] + grid[row][col + 2];

        // Check all rows
        for (int i = 0; i < 3; i++) {
            int rowSum = grid[row + i][col] + grid[row + i][col + 1] + grid[row + i][col + 2];
            if (rowSum != sum) return false;
        }

        // Check all columns
        for (int j = 0; j < 3; j++) {
            int colSum = grid[row][col + j] + grid[row + 1][col + j] + grid[row + 2][col + j];
            if (colSum != sum) return false;
        }

        // Check the two diagonals
        int diag1 = grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2];
        int diag2 = grid[row][col + 2] + grid[row + 1][col + 1] + grid[row + 2][col];
        if (diag1 != sum || diag2 != sum) return false;

        return true;
    }
}

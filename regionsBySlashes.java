class Solution {
    public int regionsBySlashes(String[] grid) {
        int n = grid.length;
        // There are 4 regions in each cell, we map them as: 0 = top, 1 = right, 2 = bottom, 3 = left
        UnionFind uf = new UnionFind(4 * n * n);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int root = 4 * (i * n + j);
                char val = grid[i].charAt(j);

                // If '/' divide region 0 and 3, and 1 and 2
                if (val == '/') {
                    uf.union(root + 0, root + 3);
                    uf.union(root + 1, root + 2);
                }
                // If '\' divide region 0 and 1, and 2 and 3
                if (val == '\\') {
                    uf.union(root + 0, root + 1);
                    uf.union(root + 2, root + 3);
                }
                // Otherwise, it's a blank space, which means all regions are connected
                if (val == ' ') {
                    uf.union(root + 0, root + 1);
                    uf.union(root + 1, root + 2);
                    uf.union(root + 2, root + 3);
                }

                // Connect the current cell to the right cell
                if (j + 1 < n) {
                    uf.union(root + 1, 4 * (i * n + (j + 1)) + 3);
                }

                // Connect the current cell to the bottom cell
                if (i + 1 < n) {
                    uf.union(root + 2, 4 * ((i + 1) * n + j) + 0);
                }
            }
        }

        // The number of distinct regions is equal to the number of connected components
        return uf.count();
    }

    // Union-Find/Disjoint Set class
    class UnionFind {
        int[] parent;
        int[] rank;
        int count;

        public UnionFind(int size) {
            parent = new int[size];
            rank = new int[size];
            count = size;

            for (int i = 0; i < size; i++) {
                parent[i] = i;
            }
        }

        public int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]); // Path compression
            }
            return parent[x];
        }

        public void union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);

            if (rootX != rootY) {
                if (rank[rootX] > rank[rootY]) {
                    parent[rootY] = rootX;
                } else if (rank[rootX] < rank[rootY]) {
                    parent[rootX] = rootY;
                } else {
                    parent[rootY] = rootX;
                    rank[rootX]++;
                }
                count--;
            }
        }

        public int count() {
            return count;
        }
    }
}

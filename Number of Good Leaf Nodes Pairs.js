/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let result = 0;

    // Helper function to perform DFS and return the distances of leaf nodes.
    function dfs(node) {
        if (!node) return [];

        // If it's a leaf node, return the distance 1.
        if (!node.left && !node.right) return [1];

        // Get distances from left and right subtrees.
        const leftDistances = dfs(node.left);
        const rightDistances = dfs(node.right);

        // Combine distances from left and right to count good pairs.
        for (let ld of leftDistances) {
            for (let rd of rightDistances) {
                if (ld + rd <= distance) {
                    result++;
                }
            }
        }

        // Propagate distances up, incrementing by 1.
        const newDistances = [];
        for (let ld of leftDistances) {
            if (ld + 1 <= distance) newDistances.push(ld + 1);
        }
        for (let rd of rightDistances) {
            if (rd + 1 <= distance) newDistances.push(rd + 1);
        }

        return newDistances;
    }

    dfs(root);
    return result;
};

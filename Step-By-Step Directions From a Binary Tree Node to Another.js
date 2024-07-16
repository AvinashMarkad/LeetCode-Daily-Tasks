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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    // Helper function to find the LCA
    const findLCA = (node, p, q) => {
        if (!node) return null;
        if (node.val === p || node.val === q) return node;
        
        const left = findLCA(node.left, p, q);
        const right = findLCA(node.right, p, q);
        
        if (left && right) return node;
        return left ? left : right;
    };

    // Helper function to find the path from the given node to the target value
    const findPath = (node, target, path) => {
        if (!node) return false;
        if (node.val === target) return true;

        path.push('L');
        if (findPath(node.left, target, path)) return true;
        path.pop();

        path.push('R');
        if (findPath(node.right, target, path)) return true;
        path.pop();

        return false;
    };

    const lca = findLCA(root, startValue, destValue);

    let pathToStart = [];
    findPath(lca, startValue, pathToStart);

    let pathToDest = [];
    findPath(lca, destValue, pathToDest);

    const upMoves = 'U'.repeat(pathToStart.length);
    const downMoves = pathToDest.join('');

    return upMoves + downMoves;
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    // Create a dictionary to store nodes by their values
    let nodes = new Map();
    // Create a set to track all children
    let children = new Set();
    
    // Parse descriptions to build nodes and link them
    for (let [parentVal, childVal, isLeft] of descriptions) {
        // Ensure parent node exists in the map
        if (!nodes.has(parentVal)) {
            nodes.set(parentVal, new TreeNode(parentVal));
        }
        // Ensure child node exists in the map
        if (!nodes.has(childVal)) {
            nodes.set(childVal, new TreeNode(childVal));
        }
        // Get parent and child nodes from the map
        let parentNode = nodes.get(parentVal);
        let childNode = nodes.get(childVal);
        // Link child node to parent node appropriately
        if (isLeft === 1) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }
        // Add the child node value to the set of children
        children.add(childVal);
    }
    
    // Identify the root node (the node that is not a child)
    for (let [parentVal] of descriptions) {
        if (!children.has(parentVal)) {
            return nodes.get(parentVal);
        }
    }
    
    return null;
};

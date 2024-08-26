class Solution {
    public List<Integer> postorder(Node root) {
        List<Integer> result = new ArrayList<>();
        traverse(root, result);
        return result;
    }

    private void traverse(Node node, List<Integer> result) {
        if (node == null) {
            return;
        }

        // Recursively traverse each child
        for (Node child : node.children) {
            traverse(child, result);
        }

        // Add the node value after traversing children
        result.add(node.val);
    }
}

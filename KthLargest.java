class KthLargest {
    private PriorityQueue<Integer> minHeap;
    private int k;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        this.minHeap = new PriorityQueue<>(k);

        // Initialize the heap with the first k elements
        for (int num : nums) {
            add(num);
        }
    }

    public int add(int val) {
        if (minHeap.size() < k) {
            minHeap.offer(val);  // If less than k elements, add directly
        } else if (val > minHeap.peek()) {
            minHeap.poll();       // Remove the smallest element
            minHeap.offer(val);   // Add the new value
        }
        return minHeap.peek();    // The root of the heap is the k-th largest
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */

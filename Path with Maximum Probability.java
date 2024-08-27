import java.util.*;

class Solution {
    public double maxProbability(int n, int[][] edges, double[] succProb, int start_node, int end_node) {
        // Create an adjacency list where each node points to a list of pairs (neighbor, probability)
        Map<Integer, List<Pair<Integer, Double>>> graph = new HashMap<>();
        for (int i = 0; i < n; i++) {
            graph.put(i, new ArrayList<>());
        }
        
        // Fill the adjacency list with edges and probabilities
        for (int i = 0; i < edges.length; i++) {
            int u = edges[i][0];
            int v = edges[i][1];
            double prob = succProb[i];
            graph.get(u).add(new Pair<>(v, prob));
            graph.get(v).add(new Pair<>(u, prob));
        }
        
        // Array to keep track of the maximum probability to reach each node
        double[] maxProb = new double[n];
        maxProb[start_node] = 1.0;
        
        // Priority queue to explore the most promising paths first (max-heap based on probability)
        PriorityQueue<Pair<Double, Integer>> pq = new PriorityQueue<>((a, b) -> Double.compare(b.getKey(), a.getKey()));
        pq.add(new Pair<>(1.0, start_node));
        
        // Dijkstra-like exploration
        while (!pq.isEmpty()) {
            Pair<Double, Integer> current = pq.poll();
            double prob = current.getKey();
            int node = current.getValue();
            
            // If we reach the end node, return the probability
            if (node == end_node) {
                return prob;
            }
            
            // Explore the neighbors
            for (Pair<Integer, Double> neighbor : graph.get(node)) {
                int nextNode = neighbor.getKey();
                double edgeProb = neighbor.getValue();
                double newProb = prob * edgeProb;
                
                // If we find a path with a higher probability, update and push to the priority queue
                if (newProb > maxProb[nextNode]) {
                    maxProb[nextNode] = newProb;
                    pq.add(new Pair<>(newProb, nextNode));
                }
            }
        }
        
        // If we can't reach the end node, return 0
        return 0.0;
    }

    // Helper class to store pairs of (node, probability)
    static class Pair<K, V> {
        private K key;
        private V value;

        public Pair(K key, V value) {
            this.key = key;
            this.value = value;
        }

        public K getKey() {
            return key;
        }

        public V getValue() {
            return value;
        }
    }
}

import java.util.*;

class Solution {
    public int[][] modifiedGraphEdges(int n, int[][] edges, int source, int destination, int target) {
        // Convert edges to adjacency list
        List<int[]>[] graph = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }
        
        for (int[] edge : edges) {
            graph[edge[0]].add(new int[] {edge[1], edge[2]});
            graph[edge[1]].add(new int[] {edge[0], edge[2]});
        }
        
        // Step 1: Calculate the initial shortest path ignoring -1 weights
        long[] dist1 = dijkstra(n, graph, source, destination, false);
        
        if (dist1[destination] > target) return new int[0][];
        if (dist1[destination] == target) {
            for (int[] edge : edges) {
                if (edge[2] == -1) edge[2] = 1;
            }
            return edges;
        }
        
        // Step 2: Modify -1 edges
        long[] dist2 = dijkstra(n, graph, source, destination, true);
        
        if (dist2[destination] < target) return new int[0][];
        
        for (int[] edge : edges) {
            if (edge[2] == -1) edge[2] = 1; // Update to smallest possible value
        }
        
        long diff = target - dist1[destination];
        
        for (int[] edge : edges) {
            if (edge[2] == 1 && (dist2[destination] > target)) {
                edge[2] += Math.min(diff, 2_000_000_000);
                break;
            }
        }
        
        return edges;
    }
    
    private long[] dijkstra(int n, List<int[]>[] graph, int source, int destination, boolean useLargeWeights) {
        long[] dist = new long[n];
        Arrays.fill(dist, Long.MAX_VALUE);
        dist[source] = 0;
        
        PriorityQueue<long[]> pq = new PriorityQueue<>(Comparator.comparingLong(a -> a[1]));
        pq.add(new long[] {source, 0});
        
        while (!pq.isEmpty()) {
            long[] current = pq.poll();
            int node = (int) current[0];
            long currDist = current[1];
            
            if (currDist > dist[node]) continue;
            
            for (int[] neighbor : graph[node]) {
                int nextNode = neighbor[0];
                long weight = neighbor[1];
                
                if (weight == -1) weight = useLargeWeights ? 2_000_000_000 : 1;
                
                if (dist[nextNode] > dist[node] + weight) {
                    dist[nextNode] = dist[node] + weight;
                    pq.add(new long[] {nextNode, dist[nextNode]});
                }
            }
        }
        
        return dist;
    }
}

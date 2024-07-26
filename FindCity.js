/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    // Initialize the distance matrix with Infinity, and 0 for diagonal elements
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }
    
    // Fill in the initial distances based on the edges
    for (const [from, to, weight] of edges) {
        dist[from][to] = weight;
        dist[to][from] = weight;
    }
    
    // Floyd-Warshall algorithm to find all pairs shortest paths
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    
    let minNeighbors = n; // Start with the maximum possible
    let cityWithMinNeighbors = -1;
    
    // Count reachable cities for each city within the threshold
    for (let i = 0; i < n; i++) {
        let reachableCount = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j && dist[i][j] <= distanceThreshold) {
                reachableCount++;
            }
        }
        // Update the result if the current city has fewer or equal reachable neighbors
        // but with a greater city index (as required by the problem)
        if (reachableCount <= minNeighbors) {
            minNeighbors = reachableCount;
            cityWithMinNeighbors = i;
        }
    }
    
    return cityWithMinNeighbors;
};

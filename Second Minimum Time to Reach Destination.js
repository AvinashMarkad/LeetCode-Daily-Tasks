/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function(n, edges, time, change) {
    // Create adjacency list for the graph
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // Initialize the first and second minimum time arrays
    const first = Array(n + 1).fill(Infinity);
    const second = Array(n + 1).fill(Infinity);
    first[1] = 0; // Start at node 1 with time 0

    // BFS Queue: [node, totalTime]
    const queue = [[1, 0]];
    
    while (queue.length) {
        const [currentNode, currentTime] = queue.shift();
        
        for (const neighbor of adj[currentNode]) {
            // Calculate the time to reach the neighbor
            let arrivalTime = currentTime + time;
            if (Math.floor(arrivalTime / change) % 2 === 1) {
                // If arriving during red signal, wait for it to turn green
                arrivalTime += change - (arrivalTime % change);
            }

            if (arrivalTime < first[neighbor]) {
                second[neighbor] = first[neighbor];
                first[neighbor] = arrivalTime;
                queue.push([neighbor, arrivalTime]);
            } else if (arrivalTime > first[neighbor] && arrivalTime < second[neighbor]) {
                second[neighbor] = arrivalTime;
                queue.push([neighbor, arrivalTime]);
            }
        }
    }

    return second[n];
};

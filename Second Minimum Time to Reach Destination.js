/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function(n, edges, time, change) {
    // Create an adjacency list from the edges
    let adjList = Array.from({ length: n + 1 }, () => []);
    for (let [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }
    
    // Define the two shortest times to reach each node
    let first = Array(n + 1).fill(Infinity);
    let second = Array(n + 1).fill(Infinity);
    first[1] = 0;
    
    // BFS Queue with [currentNode, currentTime]
    let queue = [[1, 0]];
    
    while (queue.length > 0) {
        let [node, currTime] = queue.shift();
        
        for (let neighbor of adjList[node]) {
            let newTime = currTime + time;
            
            // Calculate the waiting time if needed
            if (Math.floor(currTime / change) % 2 === 1) {
                newTime = (Math.floor(currTime / change) + 1) * change + time;
            }
            
            if (newTime < first[neighbor]) {
                second[neighbor] = first[neighbor];
                first[neighbor] = newTime;
                queue.push([neighbor, newTime]);
            } else if (newTime > first[neighbor] && newTime < second[neighbor]) {
                second[neighbor] = newTime;
                queue.push([neighbor, newTime]);
            }
        }
    }
    
    return second[n];
};

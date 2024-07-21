/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
function topologicalSort(k, conditions) {
    const inDegree = Array(k + 1).fill(0);
    const graph = Array.from({ length: k + 1 }, () => []);
    
    for (const [u, v] of conditions) {
        graph[u].push(v);
        inDegree[v]++;
    }
    
    const queue = [];
    for (let i = 1; i <= k; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    
    const order = [];
    while (queue.length > 0) {
        const node = queue.shift();
        order.push(node);
        for (const neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }
    
    return order.length === k ? order : [];
}

var buildMatrix = function(k, rowConditions, colConditions) {
    const rowOrder = topologicalSort(k, rowConditions);
    const colOrder = topologicalSort(k, colConditions);
    
    if (rowOrder.length === 0 || colOrder.length === 0) return [];
    
    const rowIndex = new Map();
    const colIndex = new Map();
    
    for (let i = 0; i < k; i++) {
        rowIndex.set(rowOrder[i], i);
        colIndex.set(colOrder[i], i);
    }
    
    const matrix = Array.from({ length: k }, () => Array(k).fill(0));
    
    for (let i = 1; i <= k; i++) {
        matrix[rowIndex.get(i)][colIndex.get(i)] = i;
    }
    
    return matrix;
};


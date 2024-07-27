/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const n = source.length;
    const inf = Number.MAX_SAFE_INTEGER;
    const charCount = 26;
    const index = char => char.charCodeAt(0) - 'a'.charCodeAt(0);
    
    // Initialize the cost matrix with infinite values
    const dist = Array.from({ length: charCount }, () => Array(charCount).fill(inf));
    
    // Set the cost to change a character to itself to zero
    for (let i = 0; i < charCount; i++) {
        dist[i][i] = 0;
    }
    
    // Fill the cost matrix with the given conversions
    for (let i = 0; i < original.length; i++) {
        const u = index(original[i]);
        const v = index(changed[i]);
        dist[u][v] = Math.min(dist[u][v], cost[i]);
    }
    
    // Floyd-Warshall algorithm to find the shortest paths between all pairs of nodes
    for (let k = 0; k < charCount; k++) {
        for (let i = 0; i < charCount; i++) {
            for (let j = 0; j < charCount; j++) {
                if (dist[i][k] !== inf && dist[k][j] !== inf) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }
    
    // Calculate the minimum cost to convert the source to target
    let totalCost = 0;
    for (let i = 0; i < n; i++) {
        const from = index(source[i]);
        const to = index(target[i]);
        if (dist[from][to] === inf) {
            return -1;
        }
        totalCost += dist[from][to];
    }
    
    return totalCost;
};

var minOperations = function(logs) {
    var depth = 0;
    try {
        for (var i = 0; i < logs.length; i++) {
            if (logs[i] === "../") {
                if (depth > 0) {
                    depth -= 1;
                } 
            } else if (logs[i] === "./") {
                // No change in depth
            } else if (typeof logs[i] === "string") {
                depth += 1;
            } else {
                throw new Error("Invalid log entry");
            }
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
        return -1; // Return -1 or another value to indicate an error
    }

    return depth;
};

var minOperations = function(logs) {
    var depth = 0;
    for (var i = 0; i < logs.length; i++) {
        if (logs[i] == "../") {
            if (depth > 0) {
                depth -= 1;
            } 
        } else if (logs[i] == "./") {
            depth += 0
        } else {
            depth += 1;
        }

    }
    return depth < 0 ? 0 : depth;

};

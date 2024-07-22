/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    // Step 1: Combine names and heights into an array of objects
    let people = names.map((name, index) => {
        return { name: name, height: heights[index] };
    });
    
    // Step 2: Sort the array of objects by height in descending order
    people.sort((a, b) => b.height - a.height);
    
    // Step 3: Extract the names from the sorted array
    return people.map(person => person.name);
};

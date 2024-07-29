/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let n = rating.length;
    let count = 0;

    for (let j = 0; j < n; j++) {
        let less_before = 0, greater_before = 0;
        let less_after = 0, greater_after = 0;

        for (let i = 0; i < j; i++) {
            if (rating[i] < rating[j]) less_before++;
            if (rating[i] > rating[j]) greater_before++;
        }

        for (let k = j + 1; k < n; k++) {
            if (rating[k] < rating[j]) less_after++;
            if (rating[k] > rating[j]) greater_after++;
        }

        count += less_before * greater_after + greater_before * less_after;
    }

    return count;
};

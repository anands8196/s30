/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n < 2) return n
    let first = 0, second = 1;
    for (let i = 1; i < n; i++)
        [first,second] = [second,first+second]
    return second;
};
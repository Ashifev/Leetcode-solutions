/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 1) return 1;

    let pre1 = 1;
    let pre2 = 1;

    for(let i=2; i<=n; i++){
        const current = pre1 + pre2;
        pre1 = pre2;
        pre2 = current;
    }

    return pre2;
};
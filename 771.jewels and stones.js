/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let arr = [...jewels];
    for(let i=0; i<stones.length; i++){
        if(jewels.includes(stones[i])){
            count++;
        }
    }
    return count;
};
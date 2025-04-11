/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let minNum = Math.min(...nums)
    let maxNum = Math.max(...nums)
    let value;
    for(let i=1; i<=minNum; i++){
        if(minNum%i===0 && maxNum % i ===0){
           value = i
        }
    }
    return value;
};
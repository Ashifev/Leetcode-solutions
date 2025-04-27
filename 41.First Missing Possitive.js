/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let sortArr = nums.sort((a,b)=>a-b);
    let x = 1
    for(let i =0; i<=sortArr.length; i++){
        if(sortArr[i]==x) x++
    }
    return x
};
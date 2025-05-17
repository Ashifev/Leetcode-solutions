/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let newNum = num.split('')
    for(let i=0; i < num.length; i++){
        if(newNum[newNum.length-1] == 0){
            newNum.pop()
        }
    }
    return newNum.join('')
};
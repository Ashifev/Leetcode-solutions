/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let Str = s.trim()
    let str = Str.split(' ');
    return str[str.length-1].length;
};
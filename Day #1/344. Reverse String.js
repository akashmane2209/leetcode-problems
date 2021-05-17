// Link https://leetcode.com/problems/reverse-string/
/*

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.


*/



/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let currentIndex = 0;
    let temp;
    while(currentIndex < s.length / 2) {
        temp = s[currentIndex];
        s[currentIndex] = s[s.length - 1 - currentIndex];
        s[s.length - 1 - currentIndex] = temp;
        currentIndex++;
    }
    console.log(s)
};

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString( ["H","a","n","n","a","h"]))


// ! Runtime: 108ms
// ! Memory: 45.8 MB
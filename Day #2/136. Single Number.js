// https://leetcode.com/problems/single-number/

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.


Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = {}
    for(n of nums) {
        if(map[n]) {
            // map[n] = ++map[n] 
            delete map[n]
        } else {
            map[n] = 1
        }
    }
    // const idx = Object.values(map).findIndex(n => n === 1);
    // return Object.keys(map)[idx]
    return Object.keys(map)[0]
};

const singleNumberF = nums => {
    const set = new Set()
    for (const num of nums) {
        if (set.has(num)) {
            set.delete(num)
        } else {
            set.add(num)
        }
    }
    console.log(set)
    return Array.from(set)[0]
}
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumberF([4,1,2,1,2]));

// Runtime: 104 ms
// Memory Usage: 45.4 MB



//Attempt 2
// Runtime: 96 ms
// Memory Usage: 44.6 MB
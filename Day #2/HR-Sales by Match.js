// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

/*

There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example


There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .



*/

'use strict';

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    let map = {};
    let pairs = 0;
    for(let sock of ar) {
        if(map[sock]) {
            delete map[sock];
            pairs+=1
        } else {
            map[sock] = 1
        }
    }
    return pairs 

}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))

// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

/*

There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  1 or 2. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game. 
Sample Input 0

7
0 0 1 0 0 1 0
Sample Output 0

4

*/


function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;
    let i = 0
    while (i < c.length - 1) {
        if(c[i+2] === 0) i+=2 
        else i+=1
        jumps+=1;
    }
    return jumps
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]))
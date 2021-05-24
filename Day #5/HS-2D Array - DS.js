// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays


function hourglassSum(arr) {
    // Write your code here
    let maxX = arr[0].length;
    let maxY = arr.length
    let x = 0;
    let y = 0;
    let maxVal = -Infinity
    while(y + 2 < maxY) {
        x = 0;
        while(x + 2 < maxX) {
            let sum = 0;
            // console.log(arr[y][x] , arr[y][x+1] , arr[y][x+2])
            // console.log(`   ${Number(arr[y+1][x+1])}   `)
            // console.log(arr[y+2][x] , arr[y+2][x+1] , arr[y+2][x+2])
            sum+=arr[y][x] + arr[y][x+1] + arr[y][x+2];
            sum+=arr[y+1][x+1]
            sum+=arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]; 
            if(sum > maxVal) maxVal = sum
            sum = 0;
            x+=1
        }
        y+=1
    }
    return maxVal
}

/*
-1 1 -1 0 0 0
0 -1 0 0 0 0
-1 -1 -1 0 0 0
0 -9 2 -4 -4 0
-7 0 0 -2 0 0
0 0 -1 -2 -4 0

*/
arr = 
[
    [-9, -9, -9,  1,  1,  1],
    [ 0, -9,  0,  4,  3,  2],
    [-9, -9, -9,  1,  2,  3],
    [ 0,  0,  8,  6,  6,  0],
    [ 0,  0,  0, -2,  0,  0],
    [ 0,  0,  1,  2,  4,  0]
]

arr2 = [
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [-7, 0, 0, -2, 0, 0],
    [ 0,  0,  -1,  -2,  -4,  0]
]
// console.log(arr)
console.log(hourglassSum(arr2))
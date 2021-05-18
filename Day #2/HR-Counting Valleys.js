// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup


/*
8
UDDDUDUU

_/\      _
   \    /
    \/\/


Result: 1

*/

/* 
Function Description
* A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
* A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path

*/

function countingValleys(steps, path) {
    // Write your code here
    const stack = [];
    let level = 0, valleys = 0;
    let startOfValley = false;

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'D') {
            if (level <= 0) {
                startOfValley = true;
                stack.push(path[i])
            }
            level -= 1
        } else {
            level += 1;
            if (startOfValley) {
                stack.pop();
                if (stack.length === 0) {
                    valleys += 1;
                    startOfValley = false
                }
            }
        }
    }
    return valleys;
}


console.log(countingValleys(8,'UDDDUDUU'))
// Optimised solution
/*

int v = 0;     // # of valleys
int lvl = 0;   // current level
for(char c : s.toCharArray()){
    if(c == 'U') ++lvl;
    if(c == 'D') --lvl;
    
    * if we just came UP to sea level
    if(lvl == 0 && c == 'U')
        ++v;
}
System.out.print(v);

*/
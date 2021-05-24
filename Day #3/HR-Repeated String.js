// Link https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

/*
sample Input 0

aba
10
Sample Output 0

7
Explanation 0
The first  letters of the infinite string are abaabaabaa. Because there are  a's, we return .

Sample Input 1

a
1000000000000
Sample Output 1

1000000000000

*/



function repeatedString(s, n) {
    // Write your code here
    const lengthOfString = s.length;
    const occurenceOfStringTillN = Math.floor(n / lengthOfString);
    const halfRemainderString = n - (lengthOfString * occurenceOfStringTillN);
    let numberOfA = 0
    for(let i = 0; i< lengthOfString; i++) {
        if(s[i] === 'a') {
            numberOfA+=1;
        }
    }
    let res =  numberOfA * occurenceOfStringTillN;
    numberOfA = 0 
    for(let i = 0; i< halfRemainderString; i++) {
        if(s[i] === 'a') {
            numberOfA+=1;
        }
    }
    return res + numberOfA;
}

console.log(repeatedString('aba', 10))
console.log(repeatedString('a', 1000000000000))
function factorial(n) {
    if(n === BigInt(1)) return n;
    return n * factorial(n - BigInt(1))
}
function extraLongFactorials(n) {
    console.log((factorial(BigInt(n))).toString())
}
extraLongFactorials(25)
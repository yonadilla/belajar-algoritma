function extraLongFactorials(n) {
    // Write your code here
    let index = BigInt( n - 1)
    let result =  BigInt(n)   
        while (index >0n) {
            result *= index
        index -= 1n
        }
    return result
}

console.log(extraLongFactorials(25));

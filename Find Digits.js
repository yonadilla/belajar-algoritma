
function findDigits(n) {
    // Write your code here
    let divisor = 0;
    let digit = n.toString().split("").map((i) => {
        if (n % i == 0){
            divisor++
        }
    })
    return divisor
}

console.log(findDigits(124));

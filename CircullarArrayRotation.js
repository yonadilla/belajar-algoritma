function circularArrayRotation(a, k, queries) {
    // Write your code here
    for (let i = 0 ; i < k ; i++) {
        let lastIndex = a.pop()
        a.unshift(lastIndex)
    }
    return queries.map((index) => a[index])
}


console.log(circularArrayRotation([3,4,5], 2 , [1,2]));

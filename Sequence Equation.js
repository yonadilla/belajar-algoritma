function permutationEquation(p) {
    // Write your code here
    let result = []
    for (let i = 1; i <= p.length; i++) {
        let index1 = p.indexOf(i) + 1
        let index2 = p.indexOf(index1) + 1
        result.push(index2)
    }
    return result
}

console.log(permutationEquation([4 ,3 ,5 ,1 ,2]));

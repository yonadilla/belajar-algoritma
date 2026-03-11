function jumpingOnClouds(c, k) {

    let energy = 100
    let index = 0
    do {
        index = (index + k) %  c.length
        if (c[index] == 0) {
            energy -= 1
        } else {
            energy -= 3
        }
    } while (index != 0);

    return energy
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));

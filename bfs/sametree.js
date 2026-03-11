var isSameTree = function(p, q) {
    if (!p && !q) {
        return true
    }

    if (p && q && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }

    return false

};

let p = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null }
}

let q = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null }
}

console.log(isSameTree(p, q))
var isSymmetric = function(root) {
   const isMirror = (n1, n2) => {
        if (!n1 && !n2) {
            return true;
        }
        
        if (!n1 || !n2) {
            return false;
        }
        
        return n1.val === n2.val && isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
    };
    
    return isMirror(root.left, root.right);
};

let root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right:{ val: 4, left: null, right: null }
  },
  right: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right:{ val: 3, left: null, right: null }
  }
}

console.log(isSymmetric(root))
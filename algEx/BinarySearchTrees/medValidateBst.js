class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree) {
    return helper(tree, -Infinity, Infinity);
  }

  function helper(tree, minValue, maxValue) {
      if (tree === null) return true;//we have reached the bottom of the tree
      if(tree.value < minValue || tree.value >= maxValue) return false;
      const leftValid = helper(tree.left, minValue, tree.value);
      return leftValid && helper(tree.right, tree.value, maxValue);
  }
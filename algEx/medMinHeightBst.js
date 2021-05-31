function minHeightBst(array) {
    return constructMinHeightBst(array, bst, startIdx, endIdx);
}

function constructMinHeightBst(array, bst, startIdx, endIdx) {
    if (endIdx < startIdx) return;
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    const newBstNode = new bst(array[midIdx]);
    if (bst === null) {
        bst = newBstNode;
    } else {
        if (array[midIdx] < bst.value) {
            bst.left = newBstNode;
            bst = bst.left;
        } else {
            bst.right = newBstNode;
            bst = bst.right;
        }
    }
    constructMinHeightBst(array, bst, startIdx, midIdx -1);
    constructMinHeightBst(array, bst, midIdx+1, endIdx);
    return bst;
}

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
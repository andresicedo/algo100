//iterative approach
function nodeDepths(root) {
    let depthCount = 0;
    let storage = [{node: root, depth: 0}];
    while (storage.length > 0) {
        const {node, depth} = storage.pop();
        if (node === null) continue;
        depthCount+=depth;
        storage.push({node: node.left, depth: depth + 1});
        storage.push({node: node.right, depth: depth + 1});
    }
    return depthCount;
  }
// // recursive approach
// function nodeDepths(root, depth = 0) {
//     if (root === null) return 0;
//     return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
// }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
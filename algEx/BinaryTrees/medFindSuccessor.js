class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
function findSuccessor(tree, node) {
    if (node.right != null) return getLeftMostChild(node.right);

    return getRightMostChild(node);
}

function getLeftMostChild(node) {
    let currNode = node;
    while (currNode.left !== null) {
        currNode = currNode.left;
    }
    return currNode;
}

function getRightMostChild(node) {
    let currNode = node;
    while (currNode.parent !== null && currNode.parent.right === currNode) {
        currNode = currNode.parent;
    }

    return currNode.parent;
}
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo {
    constructor(numOfNodesVisited, latestVisitedValue) {
        this.numOfNodesVisited = numOfNodesVisited;
        this.latestVisitedValue = latestVisitedValue;
    }
}


function findKthLargestValueInBst(tree, k) {
    let treeInfo = new TreeInfo(0, -1);
    reverseInOrderTraverse(tree, k, treeInfo);
    return treeInfo.latestVisitedValue;
}

function reverseInOrderTraverse(node, k, treeInfo) {
    if (node === null || treeInfo.numOfNodesVisited >= k) return;
    reverseInOrderTraverse(node.right, k, treeInfo);
    if (treeInfo.numOfNodesVisited < k) {
        treeInfo.numOfNodesVisited++;
        treeInfo.latestVisitedValue = node.value;
        reverseInOrderTraverse(node.left, k, treeInfo);
    }
}

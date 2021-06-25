class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
let binaryTreeDiameter = (tree) => {
    return getTreeInfo(tree).diameter;//return diameter of treeInfo object
}

let getTreeInfo = (tree) => {
    if (tree === null) {//base case
        return new TreeInfo(0,0);
    }

    const leftTreeInfo = getTreeInfo(tree.left);//recurse on left subtree
    const rightTreeInfo = getTreeInfo(tree.right);//recurse on right subtree
    
    const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
    const maxDiameter = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
    const currentDiameter = Math.max(longestPathThroughRoot, maxDiameter);
    const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

    return new TreeInfo(currentDiameter, currentHeight);
}

class TreeInfo {//act as return type for recursive function
    constructor(diameter, height) {//access diameter as part of an obj vs tuple
        this.diameter = diameter;
        this.height = height;
    }
}

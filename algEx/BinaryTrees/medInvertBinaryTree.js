// //Iterative
// function invertBinaryTree(tree) {
//     let queue = [tree];
//     while (queue.length) {
//         let current = queue.shift();
//         if (current === null) continue;
//         swapLeftAndRight(current);
//         queue.push(current.left);
//         queue.push(current.right);
//     }
// }

// function swapLeftAndRight(tree) {
//     const left = tree.left;
//     tree.left = tree.right;
//     tree.right = left;
// }

//Recursive
function invertBinaryTree(tree) {
    if (tree === null) return;
    swapLeftAndRight(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}

function swapLeftAndRight(tree) {
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
//Space/Time Avg: O(log(n))/O(log(n)) WorstCaseScenario O(n)/O(n)
/*
Binary Search Tree - Finding Closest Value
/use a helper method
/base case: we reach the bottom of the bst (leaf)
/if the target-closest is greater than target-tree.value, closest = tree.value
/if the target is less than tree.value, call the left side of the tree(subtree) in argument
    /(tree.left, target, closest)
/if the target is greater than tree.value, call the reight side of the tree
    /(tree.right, target, closest)
/if the target is equal to the value, you found the closest integer
    /return the closest

lets code this thing!
*/
//using recursion method
// function findClosestValueInBst(tree, target) {
//     return findClosestValueInBstHelper(tree, target, tree.value);
// }

// function findClosestValueInBstHelper(tree, target, closest) {
//     //base case: we reach the bottom of the bst (leaf)
//     if(tree === null) {
//         return closest;
//     }
//     //if the target-closest is greater than target-tree.value, closest = tree.value
//     if(Math.abs( target-closest) > Math.abs(target-tree.value )) {
//         closest = tree.value;
//     }
//     //if the target is less than tree.value, call the left side of the tree(subtree) in argument
//     if(target < tree.value) {
//         //(tree.left, target, closest)
//         return findClosestValueInBstHelper(tree.left, target, closest);
//     }
//     //if the target is greater than tree.value, call the reight side of the tree
//     if(target > tree.value) {
//         //(tree.right, target, closest)
//         return findClosestValueInBstHelper(tree.right, target, closest);
//     }
//     //if the target is equal to the value, you found the closest integer
//     if(target === tree.value) {
//         //return the closest
//         return closest;
//     }
//  }

//using iteration
//time/space average: O(log(n)) / O(1) worst case O(n) / O(1)
function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
    //set the current node to tree
    let currentNode = tree;
    //while the current node is not the bottom of the bst (leaf)
    while (currentNode !== null) {
        //if the difference between the target and closest is greater than 
        //the target and current node value, closest = currentNode.value
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }
        //if the target is less than current node value, the closest node is the left node
        if (target < currentNode.value) {
            currentNode = currentNode.left;
        }
        //if the target is greater than currentNode.value, the closest node is the right value
        if (target > currentNode.value) {
            currentNode = currentNode.right;
        }
        //if the target is equal to the value of the current node, you found the closest integer
        else {
            break;
        }
    }
    return closest;
}

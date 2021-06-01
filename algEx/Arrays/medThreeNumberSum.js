//O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
    // sort the array in ascending order
    array.sort((a, b) => a - b)
    //create an empty array to store matches
    let targetMatch = [];
    //iterate over the array stopping at the second to last element
    for (let i = 0; i < array.length -2; i++) {
      let currentNum = array[i];
      //assign left pointer to the very next element to the right of i
      let lPointer = i+1;
      //assign the right pointer to the last element in the array
      let rPointer = array.length-1;
      //while the left pointer is less than the right...
      while(lPointer < rPointer) {
        //the current sum of the counts will be the sum of l,r,current
        let currentSum = currentNum + array[lPointer] + array[rPointer];
        //if the current sum is equal to target sum, push [current,l,r] to matches
        if(currentSum === targetSum) {
          targetMatch.push([currentNum, array[lPointer], array[rPointer]])
          //increment the l pointer and decrement the r pointer
          lPointer++
          rPointer--
        }
        //if the current sum is less than target, we know the l should move up
        if(currentSum < targetSum) {
          lPointer++
        }
        //if the current sum is less than target, we know the r should move down
        if(currentSum > targetSum) {
          rPointer--
        }
      }
    }
    //return your matches
    return targetMatch;
  }


console.log(threeNumberSum([12,3,1,2,-6,5,-8,6], 0))

//O(n) time | O(1) space   ** n is length of the array
function isMonotonic(array) {
    //edge case 1: empty arrays are monotonic, return true
    //edge case 2: arrays of one element are monotonic, return true
    if(array.length === 0 || array.length === 1) {
        return true
    }
    //set !decreasing and !increasing vars to true
    let nonDecrease = true;
    let nonIncrease = true;
    //iterate over the array
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        const prev = array[i-1];
        //we know that if the current element < prev element
        //than it is increasing and we can reassign
        //nonDecrease to false
        if(current < prev) {
            nonDecrease = false;
        }
        //we know that if the current element > prev element
        //than it is decreasing and we can reassign
        //nonIncrease to false
        if(current > prev) {
            nonIncrease = false;
        }
    }
    //return whichever variable is true
    return nonDecrease || nonIncrease;
  }

  console.log(isMonotonic([-1,-5,-10,-1100,-1101,-1102,-9001]))//true
  console.log(isMonotonic([1,2,3,2,6]));//false
  console.log(isMonotonic([5,4,3,2,1]))//true
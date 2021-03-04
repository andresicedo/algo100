//O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
    //create a variable for first index of sequence 
    let sIndex = 0;
    //iterate over array
    for (const number of array) {
        //edge case1: if there are no numbers in the sequence array, return false
        if (sequence.length === 0) {
            return false;
        }
        //edge case2: if the sequence array is only one number and that number is in the array
        //return true, else return false
        if (sequence[sIndex] === number && sequence.length === 1) {
            return true;
        }
        //if number at the sequence index is in the array
        if (sequence[sIndex] === number) {
            //increment the sIndex by 1
            sIndex++;
        }
    }
    //we know that if the sIndex reaches the end of the sequence array, 
    //the length of the sequence array will equal the sIndex
    //return true if this is the case
    if (sIndex === sequence.length) {
        return true;
        //else return false
    } else {
        return false;
    }
}



console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))//true

console.log(isValidSubsequence([5,1,22,25,6,-1,8,10], [25]))//true

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22,25,6]))//true

console.log(isValidSubsequence([1,1,1,1,1], [1,1,1]))//true
/*
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true / True if every element in an array is an integer or 
a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input.
*/
function isIntArray(arr) {
    if (!Array.isArray(arr)) return false;
    if (arr.length === 0) return true;

    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (Number.isInteger(number)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}


console.log(isIntArray([]));//true
console.log(isIntArray([1, 2, 3, 4]));//true
console.log(isIntArray([1, 2, 3, NaN]));//false;
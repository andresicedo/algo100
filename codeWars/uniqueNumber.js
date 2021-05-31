/*
There is an array with some numbers. All numbers are equal except for one. 
Try to find it!
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
    if (arr[0] !== arr[1] && arr[1] === arr[2]) {
        return arr[0];
    }
    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];
        let prev = arr[i-1];
        if (num !== prev) {
            return num;
        }
    }
}
    

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))// === 2
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))// === 0.55
console.log(findUniq([0, 1, 1]))//0


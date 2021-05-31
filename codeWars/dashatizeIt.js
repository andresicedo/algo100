/*
Given a variable n,
If n is an integer, Return a string with dash'-'marks before and 
after each odd integer, but do not begin or end the string with a 
dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return an empty value.
*/

function dashatize(num) {
    //edge cases
    // num is an integer
    if (isNaN(num)) return 'NaN';
    if (typeof num !== 'number') return;
    //ensure the abs value is used
    num = Math.abs(num);
    //length of 1
    if (num.toString().length === 1) return num.toString();

    let currentIdx = 0;
    let arr = num.toString().split("");
    let result = [];
    let first = 0;
    let last = (arr.length) -1;
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        let next = arr[i+1];
        //first index conditions
        if (currentIdx === first) {
            if (number % 2 === 0 && next % 2 === 1) {
                result.push(number, '-');
            }
            if (number % 2 === 0 && next % 2 === 0) {
                result.push(number);
            }
            if (number % 2 === 1) {
                result.push(number, '-');
            }
        }
        //middle index conditions
        if (currentIdx !== first && currentIdx !== last) {
            if (number % 2 === 0 && next % 2 === 1) {
                result.push(number, '-');
            }
            if (number % 2 === 0 && next % 2 === 0) {
                result.push(number);
            }
            if (number % 2 === 1) {
                result.push(number, '-');
            }
        }
        //last index conditions
        if (currentIdx === last) {
            result.push(number);
        }
        currentIdx++;
    }
    return result.join("");
}

console.log(dashatize(274))//'2-7-4'
console.log(dashatize(6815))//'68-1-5'
console.log(dashatize(5311))//'5-3-1-1'
console.log(dashatize(NaN))//'NaN'
console.log(dashatize(974302))//'9-7-4-3-02'
console.log(dashatize(-1))//1
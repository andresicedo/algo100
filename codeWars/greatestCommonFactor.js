/*
Write a function that returns the greatest common factor of an 
array of positive integers. Your return value should be a number, 
you will only receive positive integers.

function greatestCommonFactor(ar){
  const gcf = (a,b) => !b ? a : gcf(b, a%b);
  return ar.reduce((a,e) => gcf(a,e));
}

function greatestCommonFactor(array) {
  function gcf(a, b) {
    if (b === 0) return a;
    return gcf(b, a % b);
  }
  return array.reduce(gcf);
};

*/

let greatestCommonFactor = (array) => {
    let storage = {};
    let commonArr = [];
    for (let i = 0; i < array.length; i++) {
        const currNum = array[i];
        commonArr.push(commonFactors(currNum));
    }//get all factors for each number and assign to var
    let result = commonArr.reduce((acc, val) => acc.concat(val), []);
    for (let i = 0; i < result.length; i++) {
        const curr = result[i];
        if (storage[curr]) storage[curr]++;
        if (!storage[curr]) storage[curr] = 1;
    }//store num of occurrences for each factor
    let keys = Object.keys(storage);
    let gcf = keys[0];
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (storage[key] >= storage[gcf]) {
            gcf = key;
        }
    }//assign highest occurrence to gcf var and return
    return Number(gcf);
}
let commonFactors = (num) => {
    let result = [];
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            result.push(i)
        }
    }
    return result;
}

console.log(greatestCommonFactor([46, 14, 20, 88])); // --> 2
console.log(greatestCommonFactor([1, 8])); // --> 1
console.log(greatestCommonFactor([16, 4, 8])); // --> 4
console.log(greatestCommonFactor([468, 156, 806, 312, 442])); // --> 26
console.log(greatestCommonFactor([48, 99, 18 ])); // --> 3
console.log(greatestCommonFactor([32, 96, 120, 80])); // --> 8
console.log(greatestCommonFactor([91, 143, 234, 52])); // --> 13
console.log(greatestCommonFactor([171, 45, 297, 342])); // --> 9


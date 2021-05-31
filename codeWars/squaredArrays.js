/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
that checks whether the two arrays have the "same" elements, with the 
same multiplicities. "Same" means, here, that the elements in b are the 
elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the 
square of 121, 20736 the square of 144, 361 the square of 19, 25921 the 
square of 161, and so on. It gets obvious if we write b's elements in terms 
of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
*/


function comp(array1, array2) {
    let storage = {};
    if(array1 == null || array2 == null) return false;
    for (let i = 0; i < array1.length; i++) {
        const num = array1[i];
        if (storage[num]) {
            storage[num]++;
        } else {
            storage[num] = 1;
        }
    }
    for (let i = 0; i < array2.length; i++) {
        const num = array2[i];
        let root = Math.sqrt(num);
        if (storage[root]) {
            storage[root]--;
        }else {
            return false;
        }
    }
    for (const key in storage) {
        if (storage[key] !== 0) {
            return false;
        }
    }
    return true;
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]));//true

console.log(comp([5, 3, 5, 1, 7, 10, 0, 7, 7, 5, 1, 0],
    [100, 25, 1, 9, 25, 1, 50, 0, 49, 49, 0, 25]));//false
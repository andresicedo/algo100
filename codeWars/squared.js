/*
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer 
that is the square of an integer; in other words, it is the 
product of some integer with itself.

The tests will always use some integral number, so don't worry 
about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/


let isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))) {
        return true;
    } else {
        return false;
    }
}

console.log(isSquare(4))//true
console.log(isSquare(-1))//false
console.log(isSquare(25))//true
console.log(isSquare(16))//true